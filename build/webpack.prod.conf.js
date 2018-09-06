/*
 * @Author: liar
 * @Date: 2018-09-04 00:30:07
 * @Last Modified by: liar
 * @Last Modified time: 2018-09-05 17:33:55
 */
var baseWebpackConfig = require('./webpack.base.conf');
var merge = require('webpack-merge');
var utils = require('./utils');
var config = require('../config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap
    })
  },
  // devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static\\css\\[name].css',
      chunkFilename: 'static\\css\\[id].css'
    })
  ],
  mode: config.prod.NODE_ENV
});
