# @mhuffnagle/eslint-config-jest

[eslint](https://eslint.org/) eslint config for a project using [Jest](https://jestjs.io/)

## Install

```sh
npm install --save-dev @mhuffnagle/eslint-config-jest
yarn add --dev @mhuffnagle/eslint-config-jest
```

## Configuration

Create an `.eslintrc.js` file which contains:

```js
/** @type {import('eslint').Linter.Config} */
const config = { extends: '@mhuffnagle/eslint-config-jest' };

module.exports = config;
```
