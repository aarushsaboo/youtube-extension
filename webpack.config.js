const path = require("path");
const CopyWebPackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        content: "./src/content/main.js",
        popup: "./src/popup/popup.js",
        background: "./src/background.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
            test: /\.html$/,
            use: 'html-loader'
        },
        ],
        
    },
    plugins: [
        new CopyWebPackPlugin({
            patterns: [
                { from: 'src/icons', to: 'icons' },
                { from: 'src/popup/popup.html', to: 'popup.html' },
                { from: 'src/model/browser_model.json', to: 'model/browser_model.json'},
            ],
        }),
    ],
    mode: "development",
    devtool: "source-map"
}