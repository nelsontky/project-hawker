import { GetStaticProps } from "next";
import { Container, Typography } from "@material-ui/core";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import SquareLinkGrid from "components/SquareLinkGrid";

import { StallsService } from "modules/stalls/stalls.service";
import { Stall } from "modules/stalls/entities/stall.entity";

import { entityToObject } from "lib/utils/entity-to-object.util";

interface AllProps {
  allStalls: Stall[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function All({ allStalls }: AllProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>All Stalls</title>
      </Head>
      <Container
        maxWidth="md"
        className="flex flex-col justify-center h-full text-center pt-10"
      >
        <Typography variant="h2" className="font-bold">
          All Stalls
        </Typography>
      </Container>
      <Container fixed className="py-16">
        <SquareLinkGrid
          items={allStalls.map((stall) => ({
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
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const stallsService = await StallsService.build();
  const allStalls = await stallsService.findAll();

  return {
    props: {
      allStalls: entityToObject(allStalls),
    },
  };
};
