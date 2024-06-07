const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use webpack.config.js as a base

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	})
);


// serve the files on port 3000.example 
app.listen(3000, () => console.log('Example app listening on port 3000!\n'));

