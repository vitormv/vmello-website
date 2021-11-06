import { FC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { reportWebVitals } from 'src/functions/reportWebVitals';
import 'src/styles/main.scss';
import 'tailwindcss/tailwind.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export { reportWebVitals };
export default MyApp;
