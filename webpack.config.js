const webpack = require('webpack');

module.exports = {
  entry: './a.js',
  output: { filename: 'dist.js' },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
