import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { root } from '~/webpack/lib'

export default [
  new HtmlWebpackPlugin({
    template: join(root, 'chrome/views/popup.pug'),
    chunks:   ['todoapp'],
    filename: 'popup.html',
  }),
  new HtmlWebpackPlugin({
    template: join(root, 'chrome/views/background.pug'),
    chunks:   ['background'],
    filename: 'background.html',
  }),
]
