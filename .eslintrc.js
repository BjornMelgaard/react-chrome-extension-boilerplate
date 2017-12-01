module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'standard', 'plugin:promise/recommended'],
  plugins: ['standard', 'promise'],
  globals: {
    localStorage: true,
    chrome: true,
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
  },
}
