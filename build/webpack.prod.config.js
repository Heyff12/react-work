const path = require("path");
const merge = require("webpack-merge");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require("./webpack.base");
const theme = require("../src/styles/themeConfig");
const utils = require("./utils");


const prodWebpackConfig = merge(baseConfig, {
    mode: "production",
    devtool: "#source-map",
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
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
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "less-loader",
              {
                  loader:'less-loader',
                  options: {
                      javascriptEnabled: true,
                      modifyVars: theme
                  }
              }
            ]
          }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "../"),
            verbose: true
        }),
        new MiniCssExtractPlugin({
            filename: utils.assetsPath("css/[name].[contenthash].css")
        }),
        new HtmlWebpackPlugin({
            template: "../index.html",
            filename: "index.html",
            // favicon: path.join(__dirname, "../src/assets/favicon.ico"),
            inject: true
            // chunks: ["manifest", "vendor", "demo"],
            // env: process.env.NODE_ENV,
        }),
        new ZipPlugin({
            filename: "react-demo"
        })
    ]
});
module.exports = prodWebpackConfig;