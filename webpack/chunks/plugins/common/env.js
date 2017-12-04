import webpack from 'webpack'
import { fromEnvAll } from '~/webpack/lib'

const envVars = fromEnvAll([
  'NODE_ENV',
  'CHROME_EXTENSION_OAUTH_UID',
  'CHROME_EXTENSION_OAUTH_SECRET',
  'CHROME_EXTENSION_OAUTH_REDIRECT_URI',
  'API_HOST',
])

export default [
  new webpack.DefinePlugin({
    'process.env': envVars,
  }),
]
