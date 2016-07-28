var path = require('path');
var webpack = require('webpack');

var commonsPlugin = webpack.optimize.CommonsChunkPlugin('shared.js');

console.log(path.resolve('test/'));
module.exports = {
  context: path.resolve('js'),
  //entry: ['./utils.js','./app'],
  entry: {
    about: './about.js',
    contact: './contact.js',
    home: './home.js',
    app: './app/app'
  },
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    //filename: 'bundle.js'
    filename: '[name].js'
  },
  //plugins: [commonsPlugin],
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