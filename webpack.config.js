/*
 * @Description: webpack 配置文件
 * @Author: 三棵杨树
 * @Date: 2022-09-03 14:21:24
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-09-03 14:43:08
 */

const path = require('path');
const nodeExternals = require('webpack-node-externals'); // 不对node_modules进行处理
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除dist目录

const webpackconfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/app.ts'),
  },
  devtool: 'eval-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: [path.join(__dirname, '/node_modules')],
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true,
  },
};

module.exports = webpackconfig;
