var path = require('path');
var webpack = require('webpack');
var libraryName = 'sparrow';
var config = {
	entry:path.resolve(__dirname,'./src/index.js'),
	output:{
		path:path.resolve(__dirname,'./lib'),
		filename:libraryName + '.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel',
				exclude:/node_modules/
			}
		]
	}
}
module.exports = config;