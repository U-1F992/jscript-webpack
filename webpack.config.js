const path = require("path");
const EncodingPlugin = require("encoding-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WrapperPlugin = require("wrapper-webpack-plugin");

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
        new WrapperPlugin({
            header: `
try {
`,
            footer: `
} catch (e) {
    throw (e instanceof Error && e.name === 'Error')
        ? e
        : new Error('Uncaught ' + (e instanceof Error ? (e.name + (e.message !== '' ? ': ' + e.message : '')) : e.toString()));
}
`,
        }),
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
