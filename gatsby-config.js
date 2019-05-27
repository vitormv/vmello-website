module.exports = {
  siteMetadata: {
    title: 'Vitor Mello',
    description: 'Vitor Mello is a fullstack software engineer who loves programming in React.js.',
    author: 'Vitor Mello',
  },
  plugins: [
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['src/styles'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Lato',
              variants: ['100', '300', '400', '700'],
              subsets: ['latin'],
              strategy: 'cdn',
              usePreconnect: true,
            },
            {
              family: 'Lora',
              variants: ['300'],
              subsets: ['latin'],
              strategy: 'cdn',
              usePreconnect: true,
            },
          ],
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vitor Mello',
        short_name: 'Vitor Mello',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vitor Mello',
        short_name: 'Vitor Mello',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
    },
  ],
};
