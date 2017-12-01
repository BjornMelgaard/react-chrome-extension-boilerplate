const { join } = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = require('./shared/root')
const common = require('./common.config.js')

const outputDir = join(root, 'dev')
const port = 3001

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry:   {
    todoapp:    [join(root, 'chrome/extension/todoapp')],
    background: [join(root, 'chrome/extension/background')],
  },
  output: {
    path:          join(outputDir, 'js'),
    filename:      '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  devServer: {
    contentBase: outputDir,
    compress:    true,
    port,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new Dotenv({
      path: './.env.dev',
    }),
    new CleanWebpackPlugin([outputDir], {
      root,
      verbose: true,
    }),
    new CopyWebpackPlugin([
      { from: join(root, 'chrome/manifest.json'), to: outputDir },
      { context: join(root, 'chrome/assets'), from: '**', to: outputDir },
    ]),
    new HtmlWebpackPlugin({
      template: join(root, 'chrome/views/popup.pug'),
      chunks:   ['todoapp'],
      filename: join(outputDir, 'popup.html'),
    }),
    new HtmlWebpackPlugin({
      template: join(root, 'chrome/views/background.pug'),
      chunks:   ['background'],
      filename: join(outputDir, 'background.html'),
    }),
  ],
})
