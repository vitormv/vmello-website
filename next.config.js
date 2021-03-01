const nextConfig = {
  optimizeLibraries: true,
  trailingSlash: false,
  sassOptions: {
    prependData: `
      // ONLY IMPORT FILES THAT CONTAIN SCSS VARIABLES ONLY, and nothing else.
      @import "src/styles/config.scss";
    `,
  },
  webpack(config) {
    // insert js-yaml-loader
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
