import React from 'react';
import App from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
    </Head>
    <Component {...pageProps} />
  </>
);

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
