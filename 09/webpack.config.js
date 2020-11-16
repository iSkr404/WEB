const path = require("path");

module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 更容易准确定位错误
    devtool: 'inline-source-map',
    devServer: {
        port:'3000',
        proxy: {
            '/api': {
                target: 'https://cdn.ycku.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 出口文件
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}