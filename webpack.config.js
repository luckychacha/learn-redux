var webpack = require('webpack')

module.exports = {
    entry: "./multiple/src/index.js",
    output: {
        path: './multiple/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-module/
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }
}
