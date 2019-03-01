const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      title: 'React Sample',
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
};
