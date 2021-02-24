import React from 'react';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default CustomApp;
