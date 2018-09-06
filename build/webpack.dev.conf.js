/*
 * @Author: liar
 * @Date: 2018-09-04 00:30:07
 * @Last Modified by: liar
 * @Last Modified time: 2018-09-06 10:10:33
 */
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.base.conf');
var merge = require('webpack-merge');
var utils = require('./utils');
var config = require('../config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackHotMiddlewareConf = 'webpack-hot-middleware/client?path=http://localhost:' + config.dev.port + '/__webpack_hmr&timeout=2000&overlay=false';

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: ['./webpackBuildDemo/myDemo/main.js', webpackHotMiddlewareConf]
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap
    })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin(),
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ],
  mode: config.dev.NODE_ENV
});
