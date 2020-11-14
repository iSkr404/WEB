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

