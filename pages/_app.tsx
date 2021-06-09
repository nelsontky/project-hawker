import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SWRConfig } from "swr";
import axios from "axios";
import { Provider } from "react-redux";

import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

import AppFooter from "components/AppFooter";

import theme from "lib/theme";
import store from "lib/store";

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
          <Provider store={store}>
            <CssBaseline />
            <div className="h-full flex flex-col">
              <Component {...pageProps} />
              <AppFooter />
            </div>
          </Provider>
        </SWRConfig>
      </ThemeProvider>
    </React.Fragment>
  );
}
