import webpack from 'webpack'
import WriteFilePlugin from 'write-file-webpack-plugin'

const dev = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),

  // hmr
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),

  // XXX:
  // Forces webpack-dev-server program to write bundle files to the file system.
  // This plugin has no effect when webpack program is used instead of webpack-dev-server.
  //
  // we need this only because of manifest.json and icons,
  // all other files are served from memory by webpack-dev-server
  new WriteFilePlugin(),
]

export default dev
