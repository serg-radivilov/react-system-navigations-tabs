const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const host = 'localhost';

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(ttf|png)$/i, use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/',
              outputPath: 'src/'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html', filename: 'index.html' }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: host,
    port: 8080,
    historyApiFallback: true,
    inline: true,
    watchContentBase: true
  },
};