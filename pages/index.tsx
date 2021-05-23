import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import AppHero from "components/AppHero";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <div>
      <Head>
        <title>Project Hawker</title>
      </Head>
      <AppHero />
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
