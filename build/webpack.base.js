const path = require("path");
const webpack = require("webpack"); // 用于访问内置插件
const utils = require("./utils");
const resolve = require("./webpack.resolve.config");

module.exports = {
  entry: "../src/main.tsx",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../dist"),
    publicPath: "/"
  },
  context: path.resolve(__dirname, "../src"),
  devtool: "cheap-module-source-map",
  resolve: resolve,
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              plugins: [
                "react-hot-loader/babel",
                ["import", { libraryName: "antd-mobile", style: true }] // `style: true` 会加载 less 文件
              ]
            }
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              compilerOptions: {
                module: "es2015",
                lib: ["es6", "es7", "dom"]
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 2 * 1024,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 5 * 1024,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 5 * 1024,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  }
};
