const webpack = require("webpack");
const path = require("path");

const env = process.env.NODE_ENV;

const reactExternal = {
  root: "React",
  commonjs2: "react",
  commonjs: "react",
  amd: "react"
};

const reactDOMExternal = {
  root: "ReactDOM",
  commonjs2: "react-dom",
  commonjs: "react-dom",
  amd: "react-dom"
};

const config = {
  entry: "./src/index.js",

  externals: {
    "react": reactExternal,
    "react-dom": reactDOMExternal
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },

  output: {
    library: "Flexy",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
    filename: env === "production" ? "flexy.min.js" : "flexy.js"
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env)
    })
  ],

  resolve: {
    extensions: [".js", ".jsx"]
  }
};

if (env === "production") {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = config;
