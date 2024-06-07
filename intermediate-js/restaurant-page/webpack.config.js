const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
			name: 'Restaurant Page',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};
