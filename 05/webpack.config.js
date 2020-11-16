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
    devtool: 'inline-source-map',
    // 生成模式 3.0 不兼容
    // mode:'development'
    devServer:{
        port:'3000',
        stats : 'minimal',
        // 设置代理
        proxy:{
            // 匹配前缀为/api
            '/api':{
                // 目标域名ip
                target:'https://cdn.ycku.com/',
                // 改变源
                changeOrigin:true,
                // 重写url,去掉api
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}