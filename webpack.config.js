const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
const devMode = process.env.NODE_ENV !== 'production';
const SRC_DIR = `${__dirname}/src`;
const DIST_DIR = `${__dirname}/dist`;
 
module.exports = {
  entry: [
    `${SRC_DIR}/index.js`,
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
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
             // Translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[local]___[hash:base64:5]'
              },
            }
          },
        // Compiles Sass to CSS  
        'sass-loader',
        ]
      },
      // {
      //   test: /\.(scss|sass|css)$/,
      //   exclude: /node_modules/,
			// 	use: [
			// 		'style-loader',
			// 		MiniCssExtractPlugin.loader,
			// 		{
			// 			loader: "css-loader",
			// 			options: {
			// 				minimize: true,
      //         sourceMap: true,
      //         modules: {
      //           localIdentName: '[local]___[hash:base64:5]'
      //         },
			// 			}
			// 		},
			// 		{
			// 			loader: "sass-loader"
			// 		}
			// 	]
			// },
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
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 9000
  }
};