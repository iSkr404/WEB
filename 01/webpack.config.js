    const path = require('path');

    const Html = require('html-webpack-plugin');

    // const Clean = require('clean-webpack-plugin');

    module.exports = {
        // 入口文件
        entry: {
            app: './src/index.js',
            print: './src/print.js'
        },
        // 更容易准确定位错误
        devtool: 'inline-source-map',
        // 生成的服务器指向地址
        devServer:{
            contentBase:'./dist'
        },
        plugins: [
            // new Clean(['dist']),
            new Html({
                title:'这是添加了html-webpack-plugin插件之后'
            })
        ],
        // 出口文件
        output: {
            // filename: 'main.js',
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                // css处理
                {
                    test: /\.css$/,
                    use: [
                        // 顺序不能变
                        'style-loader',
                        'css-loader'
                    ]
                },
                // 图片处理
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
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
        }
    }