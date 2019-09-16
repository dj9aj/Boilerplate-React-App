import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
 
const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';
 
module.exports = {
  entry: [
    `${SRC_DIR}/index.html`,
  ],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: './index.html'
    })
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 9000
  }
};