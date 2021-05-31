import React from "react";
import { GetStaticProps } from "next";
import { Container, Typography, LinearProgress } from "@material-ui/core";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import SquareLinkGrid from "components/SquareLinkGrid";
import SearchBar from "components/SearchBar";
import HomeButton from "components/HomeButton";

import { StallsService } from "modules/stalls/stalls.service";
import { Stall } from "modules/stalls/entities/stall.entity";

import { entityToObject } from "lib/utils/entity-to-object.util";
import { searchStallsArray } from "lib/utils/search-stalls-array.util";

interface SearchProps {
  stalls: Stall[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function Search({ stalls }: SearchProps) {
  const classes = useStyles();
  const router = useRouter();
  const [filteredStalls, setFilteredStalls] =
    React.useState<Stall[] | null>(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    if (router.isReady) {
      if (!router.query.q) {
        setFilteredStalls([]);
      } else {
        setSearchTerm(router.query.q as string);
        const result = searchStallsArray(router.query.q as string, stalls);
        setFilteredStalls(result.map((result) => result.item));
      }
    }
  }, [router.isReady, router.query]);

  return (
    <div className={classes.root}>
      <Head>
        <title>Search Results</title>
      </Head>
      <HomeButton />
      <Container
        maxWidth="md"
        className="flex flex-col justify-center h-full text-center pt-10"
      >
        <Typography variant="h2" className="font-bold">
          Search Results
        </Typography>
      </Container>
      <Container fixed className="py-16">
        <SearchBar initialValue={searchTerm} className="mb-16" />
        {!filteredStalls ? (
          <LinearProgress color="secondary" />
        ) : filteredStalls.length === 0 ? (
          <div className="text-center">
            <Typography>
              Oh the sadness... No results found! Try another search term or add
              a new entry{" "}
              <a
                className="underline"
                href="https://projecthawker.com/submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </Typography>
          </div>
        ) : (
          <SquareLinkGrid
            items={filteredStalls.map((stall) => ({
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
        )}
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stallsService = await StallsService.build();
  const stalls = await stallsService.findAll();

  return {
    props: {
      stalls: entityToObject(stalls),
    },
  };
};
