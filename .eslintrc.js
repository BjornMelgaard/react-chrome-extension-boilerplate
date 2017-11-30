module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'standard', 'plugin:import/errors'],
  plugins: ['standard', 'promise', 'import'],
  globals: {
    localStorage: true,
    Doorkeeper: true,
    $: true,
    OAuth2: true,
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
    'no-var': ['error'],
    'prefer-const': ['error'],
  },
}
