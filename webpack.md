## 一、认识webpack

1. 定义：Webpack是一个现代Javascript的静态模块打包器（module bundler）、前端自动化构建工具，基于Node.js开发。
2. 解决的问题：解决了模板依赖（引入静态资源的合并、打包压缩、混淆问题等问题）和兼容性。
3. 如果不使用自动化构建工具会遇到：网页加载速度慢和要处理很多包之间的依赖关系。

## 二、Webpack的安装

1. 全局安装：先安装Webpack=> `npm install webpack -g`   同时需要安装Webpack-cli=>  `npm install webpack-cli -g`
2. 局部安装：先安装Webpack=> `npm install webpack -D `  同时需要安装Webpack-cli=>  `npm install webpack-cli -D`

## 三、模块化打包配置

创建配置文件：npm init -y

在文件夹创建文件名webpack.config.js解决打包问题，直接执行webpack就可以进行打包

```javascript
// webpack构建时，会自动读取此文件

// 获取当前路径
const path=require('path');
console.log(path.resolve);

module.exports={
    // 入口文件
    entry:'./src/index.js',

    // 出口文件
    output:{
        // 文件名
        filename:'main.js',
        // 路径，要绝对路径
        path:path.resolve(__dirname,'./dist')
    },

    // 生成的模式
    mode:'production'
    // development:开发模式
    // production:压缩模式
};
```

## 四、DevServer服务

1. 最新版本无法兼容DevServer服务，我使用的是webpack3.0和webpack-dev-server@1.2

2. 安装步骤：

   - npm init -y
   - npm install webpack@3.0 -D  在本目录安装webpack3.0版本
   - npm install webpack-dev-server@1.2.9 -D

   ```json
   {
     "name": "02",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "webpack-dev-server --inline",
       "watch":"webpack --watch",
       "build": "webpack"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "devDependencies": {
       "webpack": "^3.0.0",
       "webpack-dev-server": "^1.2.9"
     }
   }
   //之后通过 npm start就可以跑起来了！
   
   ```

## 五、管理资源

加载css、记载图片、加载字体、加载数据、[官方链接](https://www.webpackjs.com/guides/asset-management/#%E5%8A%A0%E8%BD%BD-css)

```json
{
  "name": "05",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  },
  "devDependencies": {
    "css-loader": "^3.5.3",
    "file-loader": "^6.0.0",
    "html-loader": "^1.1.0",
    "html-webpack-plugin": "^4.3.0",
    "url-loader": "^4.1.0",
    "webpack-dev-server": "^3.10.3",
    "mini-css-extract-plugin": "^0.9.0"
  }
}
```

webpack.config.js

```javascript
// 路径
const path = require('path');
// html
var HtmlWebpackPlugin = require('html-webpack-plugin');
// css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // 入口文件
    entry: {
        app: './src/js/index.js'
    },
    // 出口文件
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 模块
    module: {
        // 规则
        rules: [
            // css处理
            {
                test: /\.css$/,
                use: [
                    // 顺序不能变，从左往右
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            // 图片处理
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    // 小图片使用base64性价比收益高
                    limit: '10240',
                    // img/[hash].[ext]
                    name: 'img/[name].[ext]'
                }
            },
            // 字体文件处理
            {
                test: /\.(woff|woff2|eot|ttf|otf|TTF)$/,
                loader: 'file-loader',
                options: {
                    name: 'font/[name].[ext]'
                }
            },
            // 加载数据处理
            {
                test: /\.(csv|tsv)/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            // 当在html内容里面添加图片是需要配置
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: "src/index.html",//源文件
            template: 'src/index.html',
            title: '这是打包后的html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ],
    // 准确定位错误
    devtool: 'inline-source-map'
    // 生成模式 3.0 不兼容
    // mode:'development'
}
```

**版本问题太坑了我不知道我是因为新手才这样还是怎么样！建议安装的时候@上版本号**

![image-20201115120650220](C:\Users\19752\AppData\Roaming\Typora\typora-user-images\image-20201115120650220.png)

## 六、解决兼容性问题

下载最新版本太多坑了建议直接下载我下面的版本，把它复制到配置文件package.json里面的devDependencies下面然后命令npm install

### css兼容处理

插件：`"postcss-loader": "^3.0.0"`和`"postcss-preset-env": "^6.7.0"`

新建文件postcss.config.js

```js
const AutoPreFixer = require('autoprefixer');
module.exports = {
    plugins: [
        new AutoPreFixer({
            overrideBrowserslist: [
                '> 0.15% in CN' //可以写多个列表
            ]
        })
    ]
}

//配置文件做一些更改
// css处理
            {
                test: /\.css$/,
                use: [
                    // 顺序不能变，从左往右
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
```

同时兼容css4

```css
:root{
    --green:green;
}
.main div{
    color: green;
    color: var(--green);
}
```

### Es6语法转换

1. babel-loader：与 Webpack 协同工作的模块，加载处理 js 文件；

2. @babel/core：Babel 编译器的核心模块，是 babel-loader 依赖； 

3. @babel/preset-env：Babel 预置器，用于分析 ES6 语法； 

   `npm i babel-loader @babel/core @babel/preset-env -D`

```js
			{
                test:/\.js$/,
                loader:'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-env'
                    ],
                    plugins:[
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
            
            //配置文件里面
            "@babel/core": "^7.9.6",
    		"@babel/plugin-proposal-class-properties": "^7.8.3",
    		"@babel/preset-env": "^7.9.6",
    		"babel-loader": "^8.1.0"
```

### Eslint语法检查模块

1. eslint：JS 代码检查工具核心模块；
2.  eslint-loader：webpack 协同模块；

```js
npm i eslint -D //安装 eslint
npx eslint --init //安装配置信息
//安装
npm i eslint-loader -D
```

```js
//webpack.config.js；
{
test : /\.js$/,
loader: 'eslint-loader',
//编译前执行
enforce: 'pre',
//不检查的目录
exclude: /node_modules/
},
```

### 多页面配置打包

主要针对HtmlWebpackPlugin来配置

```js
entry: {
        index: './src/js/index.js',
        main:'./src/js/main.js'
    },
    // 出口文件
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: "src/index.html",//源文件
            template: './src/index.html',
            title: '这是打包后的html',
            filename: 'index.html',
            chunks:['index','main']//需要映入的JS
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: '这是main页面',
            filename: 'main.html',
            chunks: ['main']
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ],
```

