import Head from "next/head";
import type { AppType } from "next/app";
import type { AppProps } from "next/app"
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { trpc } from "@/utils/trpc";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
