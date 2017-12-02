import { join } from 'path'

import './loadDotenv'
import { outputDir, env, root } from './lib'
import module_ from './chunks/module'
import plugins from './chunks/plugins'

const hmrEntries = ['react-hot-loader/patch']

export default {
  devtool: env('inline-source-map', false),
  entry:   {
    todoapp:    [...env(hmrEntries, []), join(root, 'chrome/extension/todoapp')],
    background: [
      ...env(hmrEntries, []),
      join(root, 'chrome/extension/background'),
    ],
  },
  output: {
    path:          outputDir,
    filename:      '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  devServer: {
    hot:         true,
    contentBase: outputDir,
    compress:    true,
    port:        process.env.WEBPACK_DEV_SERVER_PORT,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: module_,
  plugins,
}
