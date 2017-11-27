module.exports = {
	entry: [
		'babel-polyfill',
		'./src/app/index.js'
	],
	output: {
		filename: 'bundle.js',
		path: __dirname + '/lib/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: 'babel-loader'
		}]
	}
};
//
// module.exports = {
// 	entry: './src/app/index.js',
// 	output: {
// 		path: './lib/',
// 		filename: 'index.js'
// 	},
// 	module: {
// 		loaders: [{
// 			test: /\.js$/,
// 			loader: 'babel',
// 			include: [
// 				'./src/app/'
// 			],
// 			// make sure to exclude 3rd party code in node_modules
// 			exclude: /node_modules/
// 		}]
// 	},
// 	babel: {
// 		presets: ['es2015', 'stage-2'],
// 		plugins: ['transform-runtime']
// 	}
// };
