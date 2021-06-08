import { GetServerSideProps } from "next";
import { Container, Typography } from "@material-ui/core";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import InfiniteStallsContainer from "components/InfiniteStallsContainer";
import SearchBar from "components/SearchBar";
import HomeButton from "components/HomeButton";

import { StallsService } from "modules/stalls/stalls.service";
import { Stall } from "modules/stalls/entities/stall.entity";

import { entityToObject } from "lib/utils/entity-to-object.util";

const PAGE_SIZE = 12;

interface AllProps {
  initialData: Stall[];
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

export default function All({ initialData }: AllProps) {
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
        <InfiniteStallsContainer
          apiPath="/api/v1/stalls"
          initialData={initialData}
          pageSize={PAGE_SIZE}
        />
      </Container>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const stallsService = await StallsService.build();
  const stalls = await stallsService.findAll({
    skip: 0,
    limit: PAGE_SIZE,
  });

  return {
    props: {
      initialData: entityToObject(stalls),
    },
  };
};
