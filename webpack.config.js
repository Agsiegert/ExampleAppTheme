const process = require('process');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env.NODE_ENV || 'production';
const isDevelopment = env === 'development';

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    index: './index.js',
    'index.css': './assets/stylesheets/index.scss',
  },
  module: {
    rules: [
      {
        test: /\.js(\.jsx)?$/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'es2016', 'es2017'],
              cacheDirectory: 'tmp/babel-cache',
            },
          },
          {
            loader: 'eslint-loader',
            options: { failOnError: true },
          },
        ],
      },
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
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: '../static' },
      { from: '../vendor/scrivito', to: 'scrivito' },
    ]),
    new ExtractTextPlugin({
      filename: '[name]',
    }),
  ],
  resolve: {
    alias: {
      scrivito_sdk: path.join(__dirname, 'vendor/scrivito/scrivito_sdk.js'),
    },
    extensions: ['.js', '.js.jsx'],
    modules: ['src', 'node_modules'],
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/scrivito/, to: '/scrivito/index.html' },
        { from: /./, to: '/index.html' },
      ],
    },
  },
};
