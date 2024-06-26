const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		index: './src/index.js',
	},
	mode: 'development',
	devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Restaurant Page',
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
