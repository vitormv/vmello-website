import { FC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import { reportWebVitals } from 'src/functions/reportWebVitals';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'src/styles/main.scss';
import 'tailwindcss/tailwind.css';

config.autoAddCss = false;

const metadata = {
  title: 'Vitor Mello | Senior Frontend Engineer',
  description:
    'Vitor Mello is a senior fullstack software engineer who loves programming in React.js.',
  author: 'Vitor Mello',
};

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>

    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export { reportWebVitals };
export default MyApp;
