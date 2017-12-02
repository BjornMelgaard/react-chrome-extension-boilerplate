import WriteJsonPlugin from 'write-json-webpack-plugin'

import { env } from '~/webpack/lib'

const devPort = process.env.WEBPACK_DEV_SERVER_PORT

const devContentSecurityPolicy = [
  `default-src 'self' http://localhost:${devPort};`,
  `script-src 'self' http://localhost:${devPort} 'unsafe-eval';`,
  `connect-src ws://localhost:${devPort} http://localhost:${devPort};`,
  `style-src * 'unsafe-inline' 'self' http://localhost:${devPort} blob:;`,
  `img-src 'self' http://localhost:${devPort} data:;`,
].join(' ')

const prodContentSecurityPolicy = [
  "default-src 'self';",
  "script-src 'self';",
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
      permissions:             ['contextMenus', 'tabs', 'storage'],
      content_security_policy: contentSecurityPolicy,
    },
  }),
]
