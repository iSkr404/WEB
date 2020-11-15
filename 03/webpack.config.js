const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require("process");

module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 更容易准确定位错误
    devtool: 'inline-source-map',
    // devServer: {  还没玩会
    //     contentBase: path.join(__dirname, 'dist'),
    //     // port:3000,
    //     compress: true,
    //     port: 9000
    // },
    plugins: [
        new HtmlWebpackPlugin({
            // template: 'js/[name].bundle.js',
            filename: 'index.html',
            title: '这是打包好的'
        }),
    ],
    // 出口文件
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // mode:"production"
}