const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const WorkboxPlugin = require('workbox-webpack-plugin');
const LicenseCheckerWebpackPlugin = require('license-checker-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      directoryIndex: 'index.html',
      navigateFallback: 'index.html',
      skipWaiting: true,
      swDest: 'sw.js'
    }),
    new LicenseCheckerWebpackPlugin({
      allow: '(Apache-2.0 OR BSD-2-Clause OR 0BSD OR BSD-3-Clause OR MIT)',
      ignore: ['@microsoft/*'],
      emitError: true,
      outputFilename: 'LICENSES.txt'
    })
  ],
  performance: {
    maxEntrypointSize: 256000,
    maxAssetSize: 256000,
    hints: 'warning'
  }
});
