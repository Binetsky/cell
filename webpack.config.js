const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles')
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
  ],
};
