const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
  mode: 'development',
  entry: './src/index.js',
  output:{
    filename: '[name]-[hash:6].js',
    path: path.resolve(__dirname, "../", "devBuild"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: (__dirname, "src/index.html")
    }),
    new CleanWebpackPlugin(),
  ],
}