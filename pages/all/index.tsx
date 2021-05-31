import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function All() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/all/1");
  }, []);

  return (
    <div>
      <Head>
        <title>All Stalls</title>
      </Head>
      <div className="fixed top-0 h-full w-full bg-white z-50" />
    </div>
  );
}
