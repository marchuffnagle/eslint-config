# @mhuffnagle/eslint-config-node

[eslint](https://eslint.org/) config for a Node.js project

## Install

```sh
npm install --save-dev @mhuffnagle/eslint-config-node
yarn add --dev @mhuffnagle/eslint-config-node
```

## Configuration

Create an `.eslintrc.js` file which contains:

```js
/** @type {import('eslint').Linter.Config} */
const config = { extends: '@mhuffnagle/eslint-config-node' };

module.exports = config;
```
