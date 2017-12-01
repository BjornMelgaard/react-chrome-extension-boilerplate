import webpack from 'webpack'
import { fromEnvAll, env } from '~/webpack/lib'

const onlyDevEnvVars = ['WEBPACK_DEV_SERVER_PORT', 'REMOTE_REDUX_DEVTOOLS_PORT']

const envVars = fromEnvAll([
  'NODE_ENV',
  'CHROME_EXTENSION_OAUTH_UID',
  'CHROME_EXTENSION_OAUTH_SECRET',
  'CHROME_EXTENSION_OAUTH_REDIRECT_URI',
  ...env(onlyDevEnvVars, []),
])

export default [
  new webpack.DefinePlugin({
    'process.env': envVars,
  }),
]
