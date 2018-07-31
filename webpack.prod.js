const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					name: 'vendor',
					chunks: 'initial',
					enforce: true
				}
			}
		},
		minimize: false
	},
	plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 384000,
		hints: 'warning'
	}
});
