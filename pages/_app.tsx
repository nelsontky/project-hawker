import React from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SWRConfig } from "swr";
import axios from "axios";
import { Provider } from "react-redux";
import NProgress from "nprogress";

import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

import AppFooter from "components/AppFooter";
import AppSnackbar from "components/AppSnackbar";

import theme from "lib/theme";
import store from "lib/store";
import * as gtag from "lib/gtag";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher: (url, token) =>
              axios
                .get(url, { headers: { "admin-token": token } })
                .then((res) => res.data),
          }}
        >
          <Provider store={store}>
            <CssBaseline />
            <div className="h-full flex flex-col">
              <AppSnackbar />
              <Component {...pageProps} />
              <AppFooter />
            </div>
          </Provider>
        </SWRConfig>
      </ThemeProvider>
    </React.Fragment>
  );
}
