var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');

var webPackConfig = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

if (process.env.NODE_ENV === 'production') {
  var htmlPluginConfig = {
    filename: 'index.html',
    template: 'index.ejs'
  };

  for(var field in config.html) {
    htmlPluginConfig[field] = config.html[field]
  }

  webPackConfig.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        unused    : true,
        dead_code : true,
        warnings  : false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin(htmlPluginConfig)
  ];
}

if (process.env.NODE_ENV === 'development') {
  var htmlPluginConfig = {
    filename: 'index.html',
    template: 'index.ejs'
  };

  for(var field in config.html) {
    htmlPluginConfig[field] = config.html[field]
  }

  webPackConfig.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin(htmlPluginConfig)
  ];
}

module.exports = webPackConfig;
