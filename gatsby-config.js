module.exports = {
    siteMetadata: {
        title: 'Vitor Mello',
        description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
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
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/media/favicons/android-chrome-512x512.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'GatsbyJS',
                short_name: 'GatsbyJS',
                start_url: '/',
                background_color: '#f7f0eb',
                theme_color: '#a2466c',
                display: 'standalone',
                icons: [
                    {
                        src: 'media/favicons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'media/favicons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'media/favicons/favicon.ico',
                        sizes: '32x32',
                        type: 'image/x-icon',
                    },
                    {
                        src: 'media/favicons/favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                    },
                    {
                        src: 'media/favicons/favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png',
                    },
                ], // Add or remove icon sizes
            },
        },
    ],
};
