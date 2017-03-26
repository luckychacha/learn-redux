var webpack = require('webpack')

module.exports = {
    entry: "./reddit_api/src/index.js",
    output: {
        path: './reddit_api/build/',
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
