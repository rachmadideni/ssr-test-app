const pack = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	devtool:'inline-source-map',
	entry:["./src/index.js"],
	output:{
		path:path.join(__dirname,"build"),
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test: /.js$/,// regex for ext ending in .js 
				loader:"babel-loader",
				include:path.join(__dirname,"src")
				exclude:/node_modules/
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}