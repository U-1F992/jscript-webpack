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
    devtool: 'source-map',
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin({
    //         terserOptions: {
    //             ie8: true
    //         }
    //     })],
    // },
}
