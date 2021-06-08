import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SWRConfig } from "swr";
import axios from "axios";

import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

import AppFooter from "components/AppFooter";

import theme from "lib/theme";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/icons/favicons/site.webmanifest" />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{ fetcher: (url) => axios.get(url).then((res) => res.data) }}
        >
          <CssBaseline />
          <div className="h-full flex flex-col">
            <Component {...pageProps} />
            <AppFooter />
          </div>
        </SWRConfig>
      </ThemeProvider>
    </React.Fragment>
  );
}
