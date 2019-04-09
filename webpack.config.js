const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: '[name].js',
		publicPath: 'dist/'
	},
	devServer:{
		overlay:true,
		compress: true
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: '/node-modules/'
			},
			{
			        test: /\.css$/,
			        exclude: '/node_modules/',
			        use: [
			                MiniCssExtractPlugin.loader,
			                'css-loader',
			                {
			                	loader: 'postcss-loader',
			                	options:{sourceMap:true,config:{path:'src/js/postcss.config.js'}}
			                }
			             ]
			}			
		]
	},
	plugins: [
	    new MiniCssExtractPlugin({
	      filename: '[name].css'
	    })
	  ]
}
