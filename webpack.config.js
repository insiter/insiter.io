const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'source', 'javascripts'),
  entry: {
    site: './site.js',
  },
  output: {
    path: path.resolve(__dirname, '.tmp', 'dist'),
    filename: 'javascripts/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
}
