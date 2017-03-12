var webpack = require('webpack')

module.exports = {
    entry: "./todos/src/index.js",
    output: {
        path: './todos/build/',
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
    }
}