// 路径
const path = require('path');
// html
var HtmlWebpackPlugin = require('html-webpack-plugin');
// css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩CSS
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    // 入口文件
    entry: {
        index: './src/js/index.js',
        main: './src/js/main.js'
    },
    // 出口文件
    output: {
        filename: 'js/[name].js',
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
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
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
            template: './src/index.html',
            title: '这是打包后的html',
            filename: 'index.html',
            chunks: ['index', 'main'],
            minify: {
                collapseWhitespace: true, //是否去除空格，默认 false
                removeComments: false, //是否移除注释 默认 false
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: '这是main页面',
            filename: 'main.html',
            chunks: ['main']
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    //文件监听，默认 false
    watch: true,
    //开启 watch，下面才有意义
    watchOptions: {
        //不监听解析模块目录
        ignored: /node_modules/,
        //防止更新频率太快，默认 300 毫秒，意味监听到变化后 500 毫秒再编译
        aggregateTimeout: 500,
        //轮询间隔时间，1 秒，询问系统指定文件是否变化了
        poll: 1000
    },
    // 准确定位错误
    devtool: 'inline-source-map',
    // 生成模式 3.0 不兼容
    mode: "production"
}