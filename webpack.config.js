const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: "css-loader",

          options: {
            sourceMap: true
          }
        }]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'framework',
      template: path.resolve(__dirname, './src') + '/index.html',
      filename: 'index.html',
      minify: false
    }),
    new MiniCssExtractPlugin({ filename: 'main.[contenthash].css' }),
  ],
};