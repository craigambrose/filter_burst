var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'web/static/css/app.less'),
    path.join(__dirname, 'web/static/js/entry.jsx')
  ],
  output: {
    path: path.join(__dirname, '/priv/static'),
    filename: 'js/index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'web/static/js'),
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract("style", "css!less")
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }]),
    new webpack.NoErrorsPlugin(),
    new Dotenv({safe: true, path: './.env.' + (process.env.NODE_ENV || 'development')})
  ],
  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'web/static/js',
    ],
    extensions: ['', '.js', '.jsx', '.css', '.less'],
    alias: {
      phoenix: path.join(__dirname, '/deps/phoenix/priv/static/phoenix.js'),
    },
  }
};
