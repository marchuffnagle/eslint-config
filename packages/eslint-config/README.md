# @mhuffnagle/eslint-config

[eslint](https://eslint.org/) config for a basic JavaScript project

## Install

```sh
npm install --save-dev @mhuffnagle/eslint-config
yarn add --dev @mhuffnagle/eslint-config
```

## Configuration

Create an `.eslintrc.js` file which contains:

```js
/** @type {import('eslint').Linter.Config} */
const config = { extends: '@mhuffnagle' };

module.exports = config;
```
