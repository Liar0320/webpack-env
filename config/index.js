// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');
var prod = require('./prod.env.js');
var dev = require('./dev.env.js');

module.exports = {
  prod: {
    NODE_ENV: prod.NODE_ENV,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: true
  },
  dev: {
    NODE_ENV: dev.NODE_ENV,
    port: 9998,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: false
  }
};
