import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => {
  const gaTrackingId = process.env.GA_TRACKING_ID;

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Lora:wght@400;700&display=swap"
          media="all"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap"
          media="all"
          rel="stylesheet"
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '${gaTrackingId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <meta
          name="description"
          content="Vitor Mello is a senior fullstack software engineer who loves programming in React.js."
        />
        <meta name="author" content="Vitor Mello" />
        <meta name="theme-color" content="#a2466c" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicons/favicon-32x32.png" />
      </Head>

      <body className="bg-snow font-sans text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
