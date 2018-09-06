/*
 * @Author: liar
 * @Date: 2018-09-06 09:59:57
 * @Last Modified by: liar
 * @Last Modified time: 2018-09-06 10:32:29
 */
var config = require('../config');
/**
 * config
 */
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = config.dev.NODE_ENV;
}
var port = process.env.PORT || config.dev.port;
var autoOpenBowser = !!config.dev.autoOpenBrowser;

var path = require('path');

var express = require('express');
// A better node-open. Opens stuff like websites, files, executables. Cross-platform.
// https://www.npmjs.com/package/opn
var opn = require('opn');
// var proxyMiddleware = require('http-proxy-middleware');

// webpack 打包
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');

// var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath
  // quiet: true
});

var devHotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => { console.log(0); }, path: '/__webpack_hmr', heartbeat: 10 * 1000
});

// force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     devHotMiddleware.publish({ action: 'reload' });
//     cb();
//   });
// });

var uri = 'http://localhost:' + port;
var app = express();

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
// app.use(staticPath, express.static('./static'));

// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(devHotMiddleware);

devHotMiddleware.waitUntilValid(() => {
  if (autoOpenBowser) opn(uri, { app: 'chrome' });
  console.log('webpack dev');
});

var server = app.listen(port);

module.exports = {
  close: () => {
    server.close();
  }
};
