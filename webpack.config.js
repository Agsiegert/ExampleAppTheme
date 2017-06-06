const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js(\.jsx)?$/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
              cacheDirectory: 'tmp/babel-cache',
            },
          },
          {
            loader: 'eslint-loader',
            options: { failOnError: true },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'application.js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: '../static' }
    ])
  ],
  resolve: {
    extensions: ['.js', '.js.jsx'],
    modules: ['src', 'node_modules'],
  },
};
