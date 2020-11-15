const path = require("path");

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
    // 出口文件
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}