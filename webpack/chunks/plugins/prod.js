import webpack from 'webpack'

const prod = [
  new webpack.optimize.OccurrenceOrderPlugin(),

  new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),

  // XXX: throws error without @babel/env.forceAllTransforms in .babelrc
  new webpack.optimize.UglifyJsPlugin({
    ecma:       8, // ECMAScript Version
    parallel:   true,
    comments:   false,
    compressor: {
      warnings: true,
    },
  }),
]

export default prod
