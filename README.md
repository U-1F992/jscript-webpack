# JScript-Webpack

webpackなら`Object.defineProperty`を使用しないES3仕様のバンドルが可能

## Create project

```sh
npm init --yes
npm install --save-dev typescript webpack webpack-cli encoding-plugin babel-loader @babel/core @babel/preset-env @babel/preset-typescript @babel/plugin-transform-jscript
npm install --save core-js regenerator-runtime json3
```

```js:webpack.config.js
const path = require("path");
const EncodingPlugin = require("encoding-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: path.resolve(__dirname, "src/index.ts"),
                loader: "imports-loader",
                options: {
                    type: "commonjs",
                    imports: [
                        "single json3 JSON",
                    ], // It must be "commonjs", or webpack uses Object.defineProperty on glue code
                }
            },
            {
                test: /\.(js|ts)$/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        extensions: [
            ".js",
            ".ts",
        ],
    },
    target: "browserslist",
    plugins: [
        new EncodingPlugin({
            encoding: "utf16le"
        }),
    ],
    devtool: false,
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin({
    //         terserOptions: {
    //             ie8: true
    //         }
    //     })],
    // },
}
```

```plaintext:.browserslistrc
ie 8
```

```js:babel.config.js
module.exports = {
    exclude: [
        "./node_modules/core-js"  // https://github.com/zloirock/core-js/issues/912
    ],
    presets: [
        [
            "@babel/preset-env",
            {
                "loose": true,
                "modules": "commonjs",  // https://github.com/zloirock/core-js/issues/410
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ],
        "@babel/preset-typescript"
    ],
    plugins: [
        "@babel/plugin-transform-jscript",
    ]
};
```

## Build

```sh
npx webpack build
```
