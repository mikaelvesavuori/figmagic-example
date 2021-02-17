const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const srcDir = path.resolve(__dirname, 'src');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: srcDir,
    publicPath: '/',
    hot: true,
    host: '0.0.0.0'
  },
  devtool: 'cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
    hints: 'warning'
  }
});
