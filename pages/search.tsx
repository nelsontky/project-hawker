import React from "react";
import { GetServerSideProps } from "next";
import { Container, Typography, LinearProgress } from "@material-ui/core";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import SearchBar from "components/SearchBar";
import HomeButton from "components/HomeButton";
import InfiniteStallsContainer from "components/InfiniteStallsContainer";

import { Stall } from "modules/stalls/entities/stall.entity";
import { SearchService } from "modules/search/search.service";

import { entityToObject } from "lib/utils/entity-to-object.util";

interface SearchProps {
  initialData: Stall[];
  query: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

const PAGE_SIZE = 12;

export default function Search({ initialData, query }: SearchProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Search Results</title>
      </Head>
      <HomeButton />
      <Container
        maxWidth="md"
        className="flex flex-col justify-center text-center pt-10"
      >
        <Typography variant="h2" className="font-bold">
          Search Results
        </Typography>
      </Container>
      <Container fixed className="py-16">
        <SearchBar initialValue={query} className="mb-16" />
        <InfiniteStallsContainer
          apiPath={`/api/v1/search?q=${query}&`}
          initialData={initialData}
          pageSize={PAGE_SIZE}
          emptyMessageComponent={
            <div className="text-center">
              <Typography>
                Oh the sadness... No results found! Try another search term or
                add a new entry{" "}
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
          }
        />
      </Container>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { q } = query;

  if (!q) {
    return {
      props: {
        initialData: [],
        query: "",
      },
    };
  }

  const searchService = await SearchService.build();
  const results = await searchService.search({
    query: q as string,
    skip: 0,
    limit: PAGE_SIZE,
  });
  return {
    props: {
      initialData: entityToObject(results),
      query: q,
    },
  };
};
