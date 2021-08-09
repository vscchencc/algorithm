/*
 * @Description: webpack Config
 * @Author: chencc
 * @Date: 2021-08-09 22:28:01
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-09 22:46:08
 */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/main.ts',
    output:{
      path: path.resolve(__dirname,'./dist'),
      filename: 'app.bundle.js'
    },
    devServer:{
      // 设置服务器访问的基本目录
      contentBase: path.resolve(__dirname,'./dist'),
      host: 'localhost',
      port: 8088, // 设置端口号
      inline: true 
    },
    module:{
      rules:[
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        }
      ]
  },
  resolve:{
      extensions: ['.ts','.tsx','.js']
  },
  devtool: "eval",
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}