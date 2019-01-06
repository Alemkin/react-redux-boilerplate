var webpack = require('webpack')
const config = require('../webpack.config')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const circularDependencyPlugin = new CircularDependencyPlugin({
  exclude: /a\.js|node_modules/,
  failOnError: true,
  cwd: process.cwd(),
})

module.exports = {
  module: {
    rules: config.module.rules,
  },
  plugins: [
    circularDependencyPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
}
