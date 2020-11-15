
// 路径
const path = require('path');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { template } = require('lodash');

module.exports = {
    // 入口文件
    entry: './src/js/index.js',
    // 插件选项管理
    plugins: [
        // html
        new HtmlWebpackPlugin({
            title: '这是打包完成之后的名字是可以在webpack.config.js里面更改的',
            template: './src/index.html',//默认
            filename: 'index.html'
        }),
        // css
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })

    ],
    // 出口文件
    output: {
        // 文件名
        filename: 'js/bundle.js',
        // 路径绝对路径
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
                        //   配置选项
                        options: {
                            //   静态指向路径
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            // 图片处理
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    // 输出路径
                    outputPath: 'img'
                }
            },
            // 字体文件处理
            {
                test: /\.(woff|woff2|eot|ttf|otf|TTF)$/,
                use: [
                    'file-loader'
                ]
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
            }
        ]
    },
    // 准确定位错误
    devtool: 'inline-soure-map',
    // 生成的模式  development开发  production生产压缩成一行
    mode: 'development',
    // 生成的服务器指向地址
    devServer: {
        contentBase: './dist'
    },
}