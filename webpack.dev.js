// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const config = require('config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src/main'),
  JS: path.resolve(__dirname, 'src/main/js'),
};

// Webpack configuration
module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    path.join(paths.JS, 'index.jsx'),
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?http://0.0.0.0:8080',
  ],
  output: {
    path: paths.DIST,
    filename: 'index.bundle.js'
  },
  mode: 'development',

  devServer: {
    contentBase: paths.DIST,
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.join(paths.SRC, 'index.html')
    }),
    new ExtractTextPlugin('style.bundle.css'),
    new webpack.IgnorePlugin(/^(buffertools)$/),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: config.webpack,
      appConfig: JSON.stringify(config.clientConfig)
    }),
    new webpack.LoaderOptionsPlugin({ debug: process.env === 'development' })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
