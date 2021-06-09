import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

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
        <meta name="title" content="Project Hawker" />
        <meta
          name="description"
          content="Project Hawker is a passion project aiming to be a consolidated place to list all hawkers and their stories. Help us reach out to them and let their stories be heard."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://projecthawker.com/" />
        <meta property="og:title" content="Project Hawker" />
        <meta
          property="og:description"
          content="Project Hawker is a passion project aiming to be a consolidated place to list all hawkers and their stories. Help us reach out to them and let their stories be heard."
        />
        <meta property="og:image" content="https://projecthawker.com/images/hero-background.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://projecthawker.com/" />
        <meta property="twitter:title" content="Project Hawker" />
        <meta
          property="twitter:description"
          content="Project Hawker is a passion project aiming to be a consolidated place to list all hawkers and their stories. Help us reach out to them and let their stories be heard."
        />
        <meta property="twitter:image" content="https://projecthawker.com/images/hero-background.jpg" />
      </Head>
      
      <AppHero />
      <ExploreList allStalls={allStalls} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
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
