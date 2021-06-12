import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import TokenInput from "components/admin/TokenInput";
import MainPortal from "components/admin/MainPortal";

import { useAppSelector } from "lib/hooks/redux.hook";
import { ScrapeFacebookService } from "modules/scrape-facebook/scrape-facebook.service";

interface AdminProps {
  numberOfPages: number;
}

const PAGE_SIZE = 5;
export default function Admin({ numberOfPages }: AdminProps) {
  const isAuthorized = useAppSelector((state) => state.admin.authorized);

  return (
    <div className="py-6">
      <Head>
        <title>Project Hawker Admin Portal</title>
      </Head>
      {isAuthorized ? (
        <MainPortal numberOfPages={numberOfPages} pageSize={PAGE_SIZE} />
      ) : (
        <TokenInput />
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const facebookService = await ScrapeFacebookService.build();
  const numberOfPages = Math.ceil(
    (await facebookService.count({
      where: `array_length("imageNames", 1) > 0`,
    })) / PAGE_SIZE
  );

  return {
    props: {
      numberOfPages,
    },
  };
};
