const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env = {}) => {
  return {
    context: path.join(__dirname, 'src'),
    entry: {
      index: './index.js',
      scrivito_extensions: './scrivito_extensions.js',
      'index.css': './assets/stylesheets/index.scss',
      danger_zone: './danger_zone.js',
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
                presets: [
                  'react',
                  ['env', { targets: { browsers: ['last 2 versions', 'ie >= 10'] }, debug: false }],
                ],
                plugins: ['transform-object-rest-spread'],
                cacheDirectory: 'tmp/babel-cache',
              },
            },
            {
              loader: 'eslint-loader',
              options: {
                emitWarning: !env.production,
              },
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
                  minimize: env.production,
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
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    resolve: {
      alias: {
        scrivito_sdk: path.join(__dirname, 'vendor/scrivito/scrivito_sdk.js'),
      },
      extensions: ['.js', '.js.jsx'],
      modules: ['src', 'node_modules'],
    },
    devServer: {
      // host: '0.0.0.0',
      // disableHostCheck: true,
      port: 8080,
      historyApiFallback: {
        rewrites: [
          { from: /^\/scrivito/, to: '/scrivito/index.html' },
          { from: /./, to: '/index.html' },
        ],
      },
    },
  };
};
