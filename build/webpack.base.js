const path = require("path");
const webpack = require("webpack"); // 用于访问内置插件
const utils = require("./utils");
const resolve = require("./webpack.resolve.config");
const theme = require("../src/styles/themeConfig");
const tsImportPluginFactory = require("ts-import-plugin");

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
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryName: "antd",
                    libraryDirectory: "es"
                  })
                ]
              }),
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
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /base\.less/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("precss"), require("postcss-cssnext")];
              }
            }
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: theme
            }
          }
        ],
        include: /node_modules/,
      },
      {
        test: /\.css$|\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("precss"), require("postcss-cssnext")];
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 5 * 1024,
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
