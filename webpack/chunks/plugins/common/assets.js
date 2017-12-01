import { join } from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { root, outputDir } from '~/webpack/lib'

export default [
  new CopyWebpackPlugin([
    { context: join(root, 'chrome/assets'), from: '**', to: outputDir },
  ]),
]
