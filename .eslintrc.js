module.exports = {
  extends: ['eslint:recommended', 'standard', 'plugin:ramda/recommended'],
  plugins: ['ramda', 'standard', 'promise'],
  rules: {
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
