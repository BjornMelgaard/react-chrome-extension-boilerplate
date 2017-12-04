import WriteJsonPlugin from 'write-json-webpack-plugin'

import { env } from '~/webpack/lib'

const devPort = process.env.WEBPACK_DEV_SERVER_PORT

const hmrHttpHost = `http://localhost:${devPort}`
const hmrWsHost = `ws://localhost:${devPort}`
const apiHttpHost = process.env.API_HOST

const devContentSecurityPolicy = [
  `default-src 'self' ${hmrHttpHost};`,
  `script-src 'self' ${hmrHttpHost} 'unsafe-eval';`,
  `connect-src ${hmrWsHost} ${hmrHttpHost} ${apiHttpHost};`,
  `style-src * 'unsafe-inline' 'self' ${hmrHttpHost} blob:;`,
  `img-src 'self' ${hmrHttpHost} data:;`,
].join(' ')

const prodContentSecurityPolicy = [
  "default-src 'self';",
  "script-src 'self';",
  `connect-src ${apiHttpHost};`,
  "style-src * 'unsafe-inline';",
  "img-src 'self' data:;",
].join(' ')

const contentSecurityPolicy = env(
  devContentSecurityPolicy,
  prodContentSecurityPolicy
)

export default [
  // XXX:
  // WriteFilePlugin required in development
  new WriteJsonPlugin({
    filename: 'manifest.json',
    pretty:   true,
    object:   {
      version:          '0.0.0',
      name:             'react-chrome-extension-example',
      manifest_version: 2,
      description:      'Example for react-chrome-extension-boilerplate',
      browser_action:   {
        default_title: 'React Chrome Extension Example',
        default_popup: 'popup.html',
      },
      icons: {
        16:  'img/icon-16.png',
        48:  'img/icon-48.png',
        128: 'img/icon-128.png',
      },
      background: {
        page: 'background.html',
      },
      permissions:             ['tabs', 'storage', 'identity'],
      content_security_policy: contentSecurityPolicy,
    },
  }),
]
