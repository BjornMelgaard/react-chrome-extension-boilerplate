module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'standard', 'plugin:promise/recommended'],
  globals: {
    localStorage: true,
    chrome: true,
    CHROME_EXTENSION_OAUTH_UID: true,
    CHROME_EXTENSION_OAUTH_SECRET: true,
    CHROME_EXTENSION_OAUTH_REDIRECT_URI: true,
  },
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'no-console': 'off',
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

    'global-require': ['off'],
  },
}
