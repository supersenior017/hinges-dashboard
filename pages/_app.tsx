import "../styles/index.scss";

import { DefaultSeo } from "next-seo";
// import default seo configuration
import SEO from "../next-seo.config";
import Head from "next/head";

import nextI18NextConfig from "../next-i18next.config.js";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
