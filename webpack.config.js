const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: ['es6-promise/auto', 'isomorphic-fetch',
        '@babel/polyfill', 'webpack/hot/dev-server', "./src/core/index.js"],
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    devServer: {
        publicPath: '/dist/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            stats: { children: false },
            template: './index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    }
}