const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const merge = require('webpack-merge')

const inRoot = require('./shared/inRoot')
const common = require('./common.config.js')

module.exports = merge(common, {
  entry: {
    todoapp:    [inRoot('chrome/extension/todoapp')],
    background: [inRoot('chrome/extension/background')],
  },
  output: {
    path:          inRoot('build/js'),
    filename:      '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
    new webpack.optimize.UglifyJsPlugin({
      comments:   false,
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new Dotenv({
      path: './.env.prod',
    }),
  ],
})
