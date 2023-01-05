# JScript-Webpack

webpackなら`Object.defineProperty`を使用しないES3仕様のバンドルが可能

## Create project

```sh
npm init --yes
npm install --save-dev typescript webpack webpack-cli encoding-plugin wrapper-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-typescript @babel/plugin-transform-jscript
npm install --save core-js regenerator-runtime json3
```

`js:webpack.config.js` `.browserslistrc` `babel.config.js`

## Build

```sh
npx webpack build
```
