const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
