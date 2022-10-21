/* eslint-disable*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = 'development';

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
    module:   {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, 
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  mode,
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
};