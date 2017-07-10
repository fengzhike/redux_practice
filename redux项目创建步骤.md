# package.json


## 初始化项目
>     npm init -y

## 安装react react-dom redux react-redux redux-logger
>	  npm install react react-dom redux react-redux redux-logger --save

## 安装 immutable moment 
>    npm install immutable moment --save

## 安装 webpack webpack-dev-server 
>    npm install webpack webpack-dev-server --save-dev

## 安装 babel 
>    npm install  babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-polyfill babel-core   --save-dev


## 安装 less
>		npm install less --save-dev

## 安装 webpack loader 
>   	npm install babel-loader style-loader css-loader less-loader file-loader url-loader react-hot-loader --save-dev 

## 安装 webpack 插件

>		npm install extract-text-webpack-plugin html-webpack-plugin --save-dev

# 创建 .babelrc 文件  配置babel 预处理

		{
		   "presets": [
		    "es2015",
		    "react",
		    "stage-0"
		  ]
		}

# 创建 webpack.config.js 

## 入口文件

		entry:{
			main:'./src/index.js'
		},

## 出口文件

		output:{
			path:path.join(__dirname, 'dist'),
			filename: '[name].[hash:8].bundle.js'
		},

## loaders
		module:{
			rules: [{
            test: /\.css$/,
            exclude: /node_modules/,

            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]...
			...
## 插件
	
		var ExtractTextPlugin = require('extract-text-webpack-plugin')	
		var HtmlWebpackPlugin = require('html-webpack-plugin')
		...
# 设置脚本命令

		"scripts": {
		    "start": "webpack-dev-server --inline --progress --colors --watch --compress --content-base ./dist  --port 1000 --host 0.0.0.0",
		    "build": "webpack --colors --display-error-details "
		 },

# 初始化项目结构