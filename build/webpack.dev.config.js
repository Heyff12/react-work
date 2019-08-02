const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");
const proxy = require("./proxy.config")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

const PORT = 2222
const _HOST = "0.0.0.0"
const HOST = `http://${_HOST}`
const URL = `${HOST}:${PORT}`

let proxyOptions = proxy

const devWebpackConfig = merge(baseConfig, {
    mode: 'development',
    devtool: "cheap-module-source-map",
    devServer: {
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false,
        },
        hot: true,
        // enable HMR on the server
        compress: true,
        contentBase: path.resolve(__dirname, "../src"),
        // match the output path
        port: PORT,
        host: _HOST,
        publicPath: URL,
        historyApiFallback: true,
        proxy: [() => proxyOptions],
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        disableHostCheck: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve(__dirname, "../tsconfig.json"),
            tslint: path.resolve(__dirname, "../tslint.json"),
        }),
        new HtmlWebpackPlugin({
            template: '../index.html'
        })
    ]

})
module.exports = devWebpackConfig;