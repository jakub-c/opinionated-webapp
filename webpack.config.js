const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './static'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader'}]
      }
    ]
  }
}
