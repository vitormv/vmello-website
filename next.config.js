const nextConfig = {
  swcMinify: true,
  trailingSlash: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    /*
      In every loaded SCSS file, append this to the top of the file by default.
      This allows using variables from other files without having to manually import the file manually each time.

      !!! IMPORTANT !!!: only import files that contain ONLY SASS variables (they are discarded when compiling to css).
    */
    prependData: `
      // ONLY IMPORT FILES THAT CONTAIN SCSS VARIABLES ONLY, and nothing else.
      @import "src/styles/config.scss";
    `,
  },
  webpack(config) {
    // allow .y(a)ml files to be imported within JS
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
