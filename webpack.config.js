/*
 * @Description: webpack Config
 * @Author: chencc
 * @Date: 2021-08-09 22:28:01
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-10 11:39:08
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  devtool: "eval-source-map", 
  entry: "./src/main.ts",
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'), 
    port: 8088,
    compress: true, 
    historyApiFallback: true, 
    hot: true
  }
}