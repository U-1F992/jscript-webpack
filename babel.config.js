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
