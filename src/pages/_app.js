import React from 'react';
import Head from 'next/head';
import { reportWebVitals } from 'src/functions/reportWebVitals';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Component {...pageProps} />
  </>
);

export { reportWebVitals };
export default MyApp;
