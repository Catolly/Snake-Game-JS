const webpack = require('webpack')
const output_path = __dirname + '/build'

module.exports = {
	target: 'web',
	mode: 'development',
	entry: {
		js: './js/app.js',
		less: './style/style.less'
	},
	devtool: 'inline-source-map',
	devServer: {
		publicPath: '/build/',
		contentBase: __dirname,
		watchContentBase: true,
		compress: true
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{	test: /\.(js)$/, use: 'babel-loader' }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		path: output_path,
		filename: '[name].bundle.js'
	}
}