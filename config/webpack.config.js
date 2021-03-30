// THIS WEBPACK CONFIG IS ONLY USED FOR DEV ONLY FOR LIVE VERSION: npm start

const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports ={
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: (__dirname, "src/index.html")
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/images", to: "assets/images" },
      ],
    }),
  ],
  devServer:{
    open:true,
    port: 9000
  }
}