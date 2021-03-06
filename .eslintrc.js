module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'standard', 'plugin:promise/recommended'],
  settings: {
    'import/resolver': {
      // TODO: fix issue eslint-babel-plugin-root-import cant parse .babelrc.js
      // and convert .babelrc to .babelrc.js
      'babel-plugin-root-import': {},
    },
  },
  globals: {
    localStorage: true,
    chrome: true,
    URL: true,
    CHROME_EXTENSION_OAUTH_UID: true,
    CHROME_EXTENSION_OAUTH_SECRET: true,
    CHROME_EXTENSION_OAUTH_REDIRECT_URI: true,
  },
  rules: {
    // style
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property: true,
          ImportDeclaration: true,
        },
      },
    ],
    'key-spacing': [
      'error',
      {
        mode: 'strict',
        align: 'value',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],

    // other
    'no-console': 'off',
    'import/prefer-default-export': ['warn'],
    'global-require': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

    // TODO
    'react/prop-types': ['warn'],
    'react/forbid-prop-types': ['warn'],
  },
}
