/*
 * @Author: liar
 * @Date: 2018-09-04 00:34:57
 * @Last Modified by: liar
 * @Last Modified time: 2018-09-05 17:32:30
 */
// https://webpack.js.org/plugins/mini-css-extract-plugin/
var path = require('path');
var config = require('../config');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.prod.assetsSubDirectory
    : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
  options = options || {};

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  };

  var MiniCssExtractPluginLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      // you can specify a publicPath here
      // by default it use publicPath in webpackOptions.output
      // publicPath: './static/css/',
      // outputPath: './static/css/'
    }
  };

  function gennerateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader];
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }
    if (options.extract) {
      void 0;
    } else {
    //  return loaders;
      return [process.env.NODE_ENV === 'production' ? MiniCssExtractPluginLoader : 'style-loader'].concat(loaders);
    }
  }

  return {
    css: gennerateLoaders(),
    // postcss: gennerateLoaders(),
    // less: gennerateLoaders('less'),
    sass: gennerateLoaders('sass', { indentedSyntax: true }),
    scss: gennerateLoaders('sass')
    // stylus: gennerateLoaders('stylus'),
    // styl: gennerateLoaders('stylus')
  };
};

exports.styleLoaders = function (options) {
  var output = [];
  var loaders = exports.cssLoaders(options);
  for (var extension in loaders) {
    if (loaders.hasOwnProperty(extension)) {
      var loader = loaders[extension];
      output.push({
        test: new RegExp('\\.' + extension + '$'),
        use: loader
      });
    }
  }
  return output;
};
//
// exports.styleLoaders = function (options) {
//   var output = [];
//   var loaders = exports.cssLoaders(options);
//   for (var extension in loaders) {
//     var loader = loaders[extension];
//     output.push({
//       test: new RegExp('\\.' + extension + '$'),
//       use: loader
//     });
//   }

//   var img_rules = {
//     test: /\.(jpg|png|ico|jpeg|gif)$/,
//     use: [{
//       loader: 'file-loader',
//       options: {
//         name: '[name].[ext]',
//         publicPath: './images/',
//         outputPath: './images/'
//       }
//     }]
//   };

//   var fonts_rules = {
//     test: /\.(eot|svg|ttf|woff)$/,
//     use: [{
//       loader: 'file-loader',
//       options: {
//         name: '[name].[ext]',
//         publicPath: './fonts/',
//         outputPath: './fonts/'
//       }
//     }]
//   };

//   var css_rules = {
//     test: /\.css$/,
//     use: [ 'style-loader', 'css-loader' ]
//   };

//   output.push(img_rules);
//   output.push(fonts_rules);
//   output.push(css_rules);

//   return output;
// };
