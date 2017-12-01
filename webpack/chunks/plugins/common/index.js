import CleanWebpackPlugin from 'clean-webpack-plugin'

import { root, outputDir } from '~/webpack/lib'

import assets from './assets'
import env from './env'
import manifest from './manifest'
import views from './views'

const common = [
  new CleanWebpackPlugin([outputDir], {
    root,
    verbose: true,
  }),
  ...assets,
  ...env,
  ...manifest,
  ...views,
]

export default common
