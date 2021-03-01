import React from 'react';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default CustomApp;
