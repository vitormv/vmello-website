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
                includePaths: ['src/styles'],
            },
        },
        'gatsby-plugin-root-import',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-yaml',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'media',
                path: `${__dirname}/src/media`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data`,
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
                icon: 'src/static/favicons/favicon-32x32.png',
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
                        src: '/favicons/favicon.ico',
                        sizes: '32x32',
                        type: 'image/x-icon',
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
