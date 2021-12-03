/** @type {import('eslint').Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@mhuffnagle/eslint-config-node',
    'plugin:@typescript-eslint/recommended',
  ],
};

module.exports = config;
