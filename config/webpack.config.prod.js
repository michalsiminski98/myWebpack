const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
  mode: 'production',
  entry: './src/index.js',
  output:{
    filename: '[name]-[contenthash:6].js',
    path: path.resolve(__dirname, "../", "docs"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options:{
            name: '[name].[ext]',
            outputPath: 'images',
          }
          },
          {
            loader: 'image-webpack-loader',
            options: {
            mozjpeg: {
              quality: 70,
              progressive: true
            }
          }
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: (__dirname, "src/index.html")
    }),
    new HtmlWebpackPlugin({
      template: (__dirname, "src/about.html"),
      filename:'about.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:6].css'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/images", to: "assets/images" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  devServer:{
    open:true,
    contentBase: path.resolve(__dirname, '../assets'),
    port: 9000
  }
}