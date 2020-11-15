/*
    postcss配置文件
 */

// const AutoPreFixer = require('autoprefixer');
//请注意：如果使用 postcss-preset-env，就删除 autoprefixer
//因为 post-preset-env 集成了 autoprefixer，不需要再引入设置
const PostPresetEnv = require('postcss-preset-env');
module.exports = {
        plugins: [
            new PostPresetEnv({
                overrideBrowserslist: [
                    '> 0.15% in CN' //可以写多个列表
                ]
            })
        ]
    }