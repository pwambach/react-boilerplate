var webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:3000'
    // 'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
