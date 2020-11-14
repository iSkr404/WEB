const path=require('path');

module.exports={
    // 入口文件
    entry:'./src/index.js',
    // 出口文件
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
}