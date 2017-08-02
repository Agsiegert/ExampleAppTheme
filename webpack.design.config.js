const process = require('process');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env.NODE_ENV || 'production';
const isDevelopment = env === 'development';

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'index.css': './assets/stylesheets/index.scss',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !isDevelopment,
              },
            }, {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: '../design' },
      { from: '../vendor/scrivito', to: 'scrivito' },
    ]),
    new ExtractTextPlugin({
      filename: '[name]',
    }),
  ],
  resolve: {
    modules: ['node_modules'],
  },
  devServer: {
    port: 4000,
  },
};
