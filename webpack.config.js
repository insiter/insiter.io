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
        exclude: /(node_modules|bower_components|\.tmp|vendor)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
    ],
  }
}
