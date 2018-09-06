/*
 * @Author: liar
 * @Date: 2018-09-06 09:59:53
 * @Last Modified by:   liar
 * @Last Modified time: 2018-09-06 09:59:53
 */
process.env.NODE_ENV = 'production';
var path = require('path');
// 优雅的终端微调器 https://www.npmjs.com/package/ora
var ora = require('ora');
// node的UNIX命令 rm -rf https://www.npmjs.com/package/rimraf
var rm = require('rimraf');
// 终端字符串样式 https://www.npmjs.com/package/chalk
var chalk = require('chalk');
var config = require('../config');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf.js');

var spinner = ora('building for production...');
spinner.start();

rm(path.join(config.prod.assetsRoot), err => {
  if (err) throw err;
  webpack(webpackConfig, (err, stats) => {
    spinner.stop();
    if (err) throw err;
    // https://webpack.js.org/configuration/stats/
    process.stdout.write(stats.toString({
      colors: true,
      entrypoints: true,
      version: true
    }) + '\n\n');

    console.log(chalk.blue('  completed...'));
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ));
  });
});

// spinner.start();
// setTimeout(() => {
//   spinner.stop();
//   console.log(chalk.blue('completed...'));
// }, 3000);
