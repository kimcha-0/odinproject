const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		print: './src/print.js',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Getting Started Guide',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	optimization: {
		runtimeChunk: 'single',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},

		],
	},
};
