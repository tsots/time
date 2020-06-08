const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const withReactSvg = require('next-react-svg');
const withImages = require('next-images');
const path = require('path');

const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    [css],
    [
      sass({
        cssModules: true,
      }),
    ],
    [
      withReactSvg({
        include: path.resolve(__dirname, 'icons'),
        webpack(config, options) {
          return config;
        },
      }),
    ],
    [
      withImages({
        webpack(config, options) {
          return config;
        },
      }),
    ],
  ],
  nextConfig
);
