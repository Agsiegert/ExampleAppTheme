const dotenv = require('dotenv');
const path = require('path');
const process = require('process');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineEnvironmentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// load ".env"
dotenv.config();

const buildPath = 'build';

module.exports = (env = {}) => {
  // see https://github.com/webpack/webpack/issues/2537 for details
  const isProduction = process.argv.indexOf('-p') !== -1 || env.production;

  if (!process.env.SCRIVITO_TENANT || process.env.SCRIVITO_TENANT === 'your_scrivito_tenant_id') {
    throw('Environment variable "SCRIVITO_TENANT" is not defined!' +
      ' Check if the ".env" file with a proper SCRIVITO_TENANT is set.' +
      ' See ".env.example" for an example.'
    );
  }

  const plugins = [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProduction && JSON.stringify('production'),
      },
    }),
    new InlineEnvironmentVariablesPlugin('SCRIVITO_TENANT'),
    new CleanWebpackPlugin([buildPath], { verbose: false }),
    new CopyWebpackPlugin([
      { from: '../static' },
      { from: '../vendor/scrivito', to: 'scrivito' },
    ]),
    new ExtractTextPlugin({
      filename: '[name]',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ];

  if (isProduction) {
    plugins.push(
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          ie8: false,
          ecma: 5,
        },
      })
    );
  }

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
          test: /\.js$/,
          include: path.join(__dirname, 'src'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  'react',
                  ['env', {
                    modules: false,
                    targets: { browsers: ['last 2 versions', 'ie >= 10'] },
                    debug: false
                  }],
                ],
                plugins: ['transform-object-rest-spread'],
                cacheDirectory: 'tmp/babel-cache',
              },
            },
            {
              loader: 'eslint-loader',
              options: {
                emitWarning: !isProduction,
              },
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: isProduction,
                },
              }, {
                loader: 'sass-loader',
              },
            ],
          }),
        },
        {
          test: /\.(png|eot|svg|ttf|woff|woff2|gif|jpg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, buildPath),
    },
    plugins: plugins,
    resolve: {
      alias: {
        scrivito_sdk: path.join(__dirname, 'vendor/scrivito/scrivito_sdk.js'),
      },
      extensions: ['.js'],
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
