var webpack = require("webpack");

module.exports = {
  entry: "./time-input-polyfill.js",
  resolve: {
    extensions: ["", ".js"],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass",
      },
    ],
  },
  output: {
    path: process.cwd() + "/",
    filename: "time-input-polyfill.dist.js",
    libraryTarget: "umd",
  },
};
