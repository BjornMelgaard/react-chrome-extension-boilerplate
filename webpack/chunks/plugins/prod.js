import webpack from 'webpack'

const prod = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
  new webpack.optimize.UglifyJsPlugin({
    comments:   false,
    compressor: {
      warnings: false,
    },
  }),
]

export default prod
