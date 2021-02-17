const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const assetsDir = path.resolve(__dirname, 'src/assets/');
const srcDir = path.resolve(__dirname, 'src/');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  watch: false,
  context: srcDir,
  entry: {
    app: './index.tsx'
  },
  output: {
    path: distDir,
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, './')
    ],
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.mjs',
      '.html',
      '.jpg',
      '.jpeg',
      '.svg',
      '.png',
      '.woff2',
      '.woff'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve('./tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              emitFile: false
            }
          }
        ],
        include: assetsDir,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${srcDir}/assets/`,
          to: `${distDir}/assets/`
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html'),
      path: distDir,
      filename: 'index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ]
};
