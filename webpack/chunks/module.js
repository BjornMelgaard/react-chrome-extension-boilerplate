import { join } from 'path'

import { root } from '~/webpack/lib'

export default {
  rules: [
    {
      test:    /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use:     [{ loader: 'babel-loader' }],
    },
    {
      test: /\.css$/,
      use:  [
        { loader: 'style-loader' },
        {
          loader:  'css-loader',
          options: {
            modules:        true,
            importLoaders:  1, // use postcss
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader:  'postcss-loader',
          options: {
            config: {
              path: join(root, 'webpack/postcss.config.js'),
            },
          },
        },
      ],
    },
    {
      test: /\.pug$/,
      use:  [
        {
          loader:  'pug-loader',
          options: {
            globals: {
              env: process.env.NODE_ENV,
            },
          },
        },
      ],
    },
  ],
}
