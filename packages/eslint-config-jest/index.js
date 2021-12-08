/** @type {import('eslint').Linter.Config} */

const { version: jestVersion } = require('jest/package.json');

const config = {
  env: {
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: jestVersion,
    },
  },
  plugins: ['jest'],
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {},
};

module.exports = config;
