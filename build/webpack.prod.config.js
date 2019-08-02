const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");

const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ZipPlugin = require("zip-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const GitRevisionPlugin = require("git-revision-webpack-plugin")
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin

const extractCss = new ExtractTextPlugin({
    filename: "styles-[name]-[hash:7].css",
    allChunks: true,
})

const prodWebpackConfig = merge(baseConfig, {
    mode: 'production',
    devtool: "#source-map",
    optimization: {
        // minimizer: [
        //     new UglifyJsPlugin({
        //         uglifyOptions: {
        //             compress: {
        //                 warnings: false,
        //                 screw_ie8: true,
        //                 sequences: true,
        //                 dead_code: true,
        //                 drop_debugger: true,
        //                 comparisons: true,
        //                 conditionals: true,
        //                 evaluate: true,
        //                 booleans: true,
        //                 loops: true,
        //                 unused: true,
        //                 hoist_funs: true,
        //                 if_return: true,
        //                 join_vars: true,
        //                 cascade: true,
        //                 drop_console: true,
        //             },
        //             output: {
        //                 comments: false,
        //             },
        //         }
        //     })
        // ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }

    },
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "../"),
            verbose: true,
        }),
        //extractCss,
        new HtmlWebpackPlugin({
            template: "../index.html",
            filename: "index.html",
            favicon: path.join(__dirname, "../src/assets/favicon.ico"),
            inject: true,
            // chunks: ["manifest", "vendor", "demo"],
            // env: process.env.NODE_ENV,
        }),
        new ZipPlugin({
            filename: "react-demo",
        }),
    ]
})
module.exports = prodWebpackConfig;