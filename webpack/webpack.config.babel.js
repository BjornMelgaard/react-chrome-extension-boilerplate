import { join } from 'path'

import './loadDotenv'
import { outputDir, env, root } from './lib'
import module_ from './chunks/module'
import plugins from './chunks/plugins'

export default {
  devtool: env('inline-source-map', false),
  entry:   {
    todoapp:    [join(root, 'chrome/extension/todoapp')],
    background: [join(root, 'chrome/extension/background')],
  },
  output: {
    path:          join(outputDir),
    filename:      'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js',
  },
  devServer: {
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
