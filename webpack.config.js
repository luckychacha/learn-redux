var webpack = require('webpack')

module.exports = {
    entry: "./todos_react_router/src/index.js",
    output: {
        path: './todos_react_router/build/',
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