import dev from './dev'
import prod from './prod'
import common from './common'

import { env } from '~/webpack/lib'

module.exports = [...common, ...env(dev, prod)]
