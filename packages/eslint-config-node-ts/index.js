/** @type {import('eslint').Linter.Config} */
const config = {
  extends: '@mhuffnagle/eslint-config-node',
  rules: {
    /**
     * The TypeScript compiler will detect these issues for us
     */
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'unicorn/no-unused-properties': 'off',
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        /**
         * This is a pain if you are only exporting one thing, you know you'll
         * soon be exporting something else. Also, there are cases where having
         * that name is just nice.
         */
        'import/prefer-default-export': 'off',

        /**
         * Rule does not apply to TypeScript, which _does_ support these
         * features
         */
        'node/no-unsupported-features/es-syntax': 'off',
      },
    },
  ],
};

module.exports = config;
