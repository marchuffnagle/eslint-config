/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    /**
     * console.log is useful
     */
    'no-console': 'off',

    /**
     * Require trailing commas in multiline arrays, objects, etc. This makes
     * diffs easier to read, so that only the changed line shows up in the diff
     * and not the line that had a comma added to it. It also makes sorting
     * easier, as you don't need to find the sorted line with the missing comma
     * and add it.
     */
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    /**
     * Try to keep complexity of our code down. There are going to be cases
     * where this value is exceeded, and we can explicitly disable the rule for
     * those cases.
     */
    'max-depth': ['error', 4],
    'max-lines-per-function': 'error',
    'max-lines': 'error',
    'max-nested-callbacks': 'error',
    'max-params': 'error',
    'max-statements-per-line': 'error',
    'max-statements': 'error',
    complexity: ['error', 10],

    /**
     * Keep line length to 80, but allow for reasonable handling of cases where
     * a longer line makes it more readable.
     */
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

    /**
     * If we've explicitly disabled an eslint rule, but that rule isn't
     * actually being triggered, remove the override that's not being used.
     */
    'eslint-comments/no-unused-disable': 'error',

    /**
     * Disabling this rule keeps our JavsScript code more in line with our
     * TypeScript standards.
     */
    'dot-notation': 'off',

    /**
     * At the moment, Lambda does not appear to support ES Modules:
     * https://stackoverflow.com/a/66688901/632670
     */
    'unicorn/prefer-module': 'off',

    /**
     * Allow function parameters to be on their own line, even if there is only
     * one parameter. This is useful in cases where even a single parameter can
     * push you over the `max-len` limit of 80 characters.
     */
    'function-paren-newline': [
      'error',
      'multiline-arguments',
    ],

    /**
     * Allow arrow function implementation to appear on a separate line. This
     * helps keep lines under 80 characters.
     *
     * Okay:
     *
     * ```
     * const f = () =>
     *   'some return value'
     * ```
     */
    'implicit-arrow-linebreak': 'off',

    /**
     * In our code, `require('./blah')` instead of `require('./blah.js')` is
     * perfectly fine.
     */
    'import/extensions': 'off',

    /**
     * Override the defaults that are specified in `airbnb-base`. This keeps
     * that same config, but removes the prohibition on `for..of` statements.
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        // eslint-disable-next-line max-len
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        // eslint-disable-next-line max-len
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        // eslint-disable-next-line max-len
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    /**
     * When parsing a string with `parseInt`, default to base 10.
     */
    radix: ['error', 'as-needed'],

    /**
     * Enforce correct Error subclassing.
     */
    'unicorn/custom-error-definition': 'error',

    /**
     * Disallow unsafe regular expressions.
     */
    'unicorn/no-unsafe-regex': 'error',

    /**
     * Disallow unused object properties.
     */
    'unicorn/no-unused-properties': 'error',

    /**
     * You know what? Sometimes `env` just clearly means `environment`. This
     * rule also makes it a lot harder to stay at 80 characters.
     */
    'unicorn/prevent-abbreviations': 'off',

    /**
     * Don't report extraneous dependencies in test files
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.ts',
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        '*.test.js',
        '*.test.ts',
      ],
      rules: {
        'max-len': 'off',
      },
    },
  ],
};

module.exports = config;
