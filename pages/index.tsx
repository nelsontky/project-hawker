import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import AppHero from "components/AppHero";
import ExploreList from "components/ExploreList";

import { StallsService } from "modules/stalls/stalls.service";
import { Stall } from "modules/stalls/entities/stall.entity";

import { entityToObject } from "lib/utils/entity-to-object.util";

interface HomeProps {
  allStalls: Stall[];
}

export default function Home({ allStalls }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Project Hawker</title>
      </Head>
      <AppHero />
      <ExploreList allStalls={allStalls} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const stallsService = await StallsService.build();
  const allStalls = await stallsService.findAll({
    limit: 8,
    orderBy: ["stall.id", "ASC"],
  });

  return {
    props: {
      allStalls: entityToObject(allStalls),
    },
  };
};
