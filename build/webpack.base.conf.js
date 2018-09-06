/*
 * @Author: liar
 * @Date: 2018-09-06 10:00:01
 * @Last Modified by: liar
 * @Last Modified time: 2018-09-06 11:14:16
 */
var path = require('path');
var config = require('../config');
var utils = require('./utils.js');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: './webpackBuildDemo/main.js'
    // app: './src/main.js'
  },
  output: {
    path: config.prod.assetsRoot,
    filename: 'js/[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.prod.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|ico|jpeg|gif)$/,
        use: [{
          loader: 'file-loader',
          // loader:'url-loader',
          options: {
            // limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }]
      }
    ]
  }
};
