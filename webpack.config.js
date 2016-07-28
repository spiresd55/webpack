var path = require('path');

console.log(path.resolve('test/'));
module.exports = {
  context: path.resolve('js'),
  entry: ['./utils.js','./app.JS'],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['','.js', '.es6']
  },
  watch: true
};