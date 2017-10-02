const webpack = require('webpack')

module.exports = {
  entry: {
    site: './source/javascripts/site.js'
  },
  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },
  module: {
    rules: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0'],
        },
      },
    ],
  },
}
