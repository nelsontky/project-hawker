import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Typography } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Link from "next/link";

import SquareLinkGrid from "components/SquareLinkGrid";
import SearchBar from "components/SearchBar";
import HomeButton from "components/HomeButton";

import { StallsService } from "modules/stalls/stalls.service";
import { Stall } from "modules/stalls/entities/stall.entity";

import { entityToObject } from "lib/utils/entity-to-object.util";

interface AllProps {
  stalls: Stall[];
  numberOfPages: number;
  pageNumber: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    pageUl: {
      justifyContent: "center",
    },
  })
);

export default function AllPage({
  stalls,
  numberOfPages,
  pageNumber,
}: AllProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>All Stalls</title>
      </Head>
      <HomeButton />
      <Container
        maxWidth="md"
        className="flex flex-col justify-center h-full text-center pt-10"
      >
        <Typography variant="h2" className="font-bold">
          All Stalls
        </Typography>
      </Container>
      <Container fixed className="py-16">
        <SearchBar className="mb-16" />
        <SquareLinkGrid
          items={stalls.map((stall) => ({
            href: `/${stall.location.slug}/${stall.slug}`,
            image: stall.images[0],
            children: (
              <span>
                {stall.name}
                <br />
                <Typography color="textSecondary" variant="subtitle2">
                  ({stall.location.name})
                </Typography>
              </span>
            ),
          }))}
        />
        <Pagination
          className="mt-8"
          page={pageNumber}
          count={numberOfPages}
          classes={{ ul: classes.pageUl }}
          renderItem={(item) => (
            <Link href={`/all/${item.page}`}>
              <a>
                <PaginationItem {...item} />
              </a>
            </Link>
          )}
        />
      </Container>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stallsService = await StallsService.build();
  const stallsCount = await stallsService.countStalls();

  const paths = Array.from({ length: stallsCount }, (_, i) => ({
    params: { pageNumber: i + 1 + "" },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const PAGE_SIZE = 12;
  const pageNumber = +params.pageNumber;

  const stallsService = await StallsService.build();
  const stalls = await stallsService.findAll({
    skip: PAGE_SIZE * (pageNumber - 1),
    limit: PAGE_SIZE,
  });
  const numberOfPages = Math.ceil(
    (await stallsService.countStalls()) / PAGE_SIZE
  );

  return {
    props: {
      stalls: entityToObject(stalls),
      numberOfPages,
      pageNumber,
    },
  };
};
