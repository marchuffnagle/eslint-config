/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    complexity: ['error', 10],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      {
        code: 80,
        ignorePattern: '(test\\(|https?://|@typedef|@type)',
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'max-lines': 'error',
    'max-lines-per-function': 'error',
    'max-nested-callbacks': 'error',
    'max-params': 'error',
    'max-statements': 'error',
    'max-statements-per-line': 'error',

    'eslint-comments/no-unused-disable': 'error',

    // At the moment, Lambda does not appear to support ES Modules:
    // https://stackoverflow.com/a/66688901/632670
    'unicorn/prefer-module': 'off',
  },
};

module.exports = config;
