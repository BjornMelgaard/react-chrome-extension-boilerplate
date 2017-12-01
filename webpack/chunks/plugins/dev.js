import webpack from 'webpack'

const dev = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
]

export default dev
