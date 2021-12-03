# @mhuffnagle/eslint-config-node-ts

[eslint](https://eslint.org/) config for a TypeScript-based Node.js project

## Install

```sh
npm install --save-dev @mhuffnagle/eslint-config-node-ts
yarn add --dev @mhuffnagle/eslint-config-node-ts
```

## Configuration

Create an `.eslintrc.js` file which contains:

```js
/** @type {import('eslint').Linter.Config} */
const config = { extends: '@mhuffnagle/eslint-config-node-ts' };

module.exports = config;
```
