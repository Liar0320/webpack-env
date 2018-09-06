
process.env.NODE_ENV = 1 ? 'development' : 'production';

var ora = require('ora');
var chalk = require('chalk');
var webpack = require('webpack');
var path = require('path');
var webpackConfig = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV
};

var spinner = ora('building for production...');
spinner.start();
webpack(webpackConfig, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
  console.log(chalk.blue('completed...'));
});

// spinner.start();
// setTimeout(() => {
//   spinner.stop();
//   console.log(chalk.blue('completed...'));
// }, 3000);
