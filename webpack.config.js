const path = require('path')

const config = {
  mode: 'development',
  devtool: 'eval',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'output.bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config