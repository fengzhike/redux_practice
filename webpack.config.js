var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')	
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool:'eval', //source-map
	entry:{
		main:'./src/index.js'
	},
	output:{
		path:path.join(__dirname, 'dist'),
		filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].[hash:8].chunk.js'
	},
	resolve: {
	    extensions: [' ', '.js','.jsx', '.json','.css','.less']
	},
	module:{
		loaders:[{
			test:/\.jsx?$/,
			loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
			exclude: /node_modules/,
			include: path.join(__dirname, 'src')
		},{
			test: /\.less$/,
            loader:ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader!less-loader"}),
            exclude: /node_modules/,
			include: path.join(__dirname, 'src')
		},{
			test: /\.css$/,
            loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader"}),
            exclude: /node_modules/,
			include: path.join(__dirname, 'src')
		},{
			test: /\.(jpg|png|svg|woff|woff2|ttf|eot|gif)$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            loader: "url-loader?limit=8192&name=[name].[hash:8].[ext]" //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
		}]
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoEmitOnErrorsPlugin(),
	    // devFlagPlugin,
	    new ExtractTextPlugin('app.css'),
	    new HtmlWebpackPlugin({
	            title: 'Redux Practive', //标题
	            // favicon: './src/assets/img/favicon.ico', //favicon路径
	            filename: './index.html', //生成的html存放路径，相对于 path
	            template: './src/index.html', //html模板路径
	            inject: true, //允许插件修改哪些内容，包括head与body`
	            minify: { //压缩HTML文件
	                removeComments: true, //移除HTML中的注释
	                collapseWhitespace: false //删除空白符与换行符
	            }
	    })
	 ]
}