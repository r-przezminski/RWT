const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.jsx', '.html' ]
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [ 'ts-loader' ]
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.html$/,
				use: [ 'html-loader' ]
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs'
					}
				}
			}
		]
	}
};
