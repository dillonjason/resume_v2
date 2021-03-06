const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader')
const WriteFilePlugin = require('write-file-webpack-plugin')

const res = p => path.resolve(__dirname, p)

const entry = res('../server/render.tsx')
const output = res('../build/server')

module.exports = {
  name: 'server',
  devtool: 'source-map',
  target: 'node',
  mode: 'development',
  entry: ['regenerator-runtime/runtime.js', entry],
  output: {
    path: output,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              silent: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              exportOnlyLocals: true,
              localIdentName: '[local]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              exportOnlyLocals: true,
              localIdentName: '[local]--[hash:base64]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss', '.mjs']
  },
  plugins: [
    new CheckerPlugin(),
    new WriteFilePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}
