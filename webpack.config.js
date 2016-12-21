var path = require('path');
var webpack = require('webpack');
var libraryName = 'sparrow';
var mode = require('yargs').argv.mode;
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
console.log(mode);
var plugins = [];
var filename = '';
if(mode === 'production'){
	plugins.push(new uglifyPlugin({
		minimize:true,
	}));
	filename = libraryName + '.min.js';
}else{
	filename = libraryName +'.js';
}
var config = {
	entry:path.resolve(__dirname,'./src/index.js'),
	output:{
		path:path.resolve(__dirname,'./lib'),
		filename:filename,
		library:libraryName,
		libraryTarget:'umd',
		umdNamedDefine:true
	},
	resolve:{
		extension:['','.js','.css','.json'],
		root:path.resolve('./src')
	},
	devtool:'cheap-source-map',
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel',
				exclude:/node_modules/
			},
			{
				test:/\.js$/,
				loader:'eslint',
				exclude:/node_modules/
			}
		]
	},
	plugins:plugins
}
module.exports = config;