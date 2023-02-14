const path = require("path")

module.exports = {
    // 入口
    entry: "./src/main.js", // 相对路径
    // 输出
    output: {
        // 打包文件输出路径
        path: path.resolve(__dirname, "dist"), // 绝对路径
        // 打包文件输出名称
        filename: "main.js"
    },
    // 加载器
    module: {
        rules: [
            // loader的配置
            { // 解析css
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            { // 解析less文件
                test: /\.less$/,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader', // 将less编译为css文件
                ],
            },
            { // 解析sass文件
                test: /\.s[ac]ss$/, // 匹配sass或者scss文件
                use: [
                    // compiles sass to CSS
                    'style-loader',
                    'css-loader',
                    'sass-loader', // 将sass文件编译为css文件
                ],
            },
            { // 解析stylus文件
                test: /\.styl$/, // 匹配styl文件
                use: [
                    // compiles stylus to CSS
                    'style-loader',
                    'css-loader',
                    'stylus-loader', // 将stylus文件编译为css文件
                ],
            },
            { // 处理图片资源 不需要额外添加loader webpack本身就有这个能力我们只是开启这个能力
                test: /\.(jpe?g|png|gif|svg|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 小于10kb转成base64
                        // 优点： 减少请求数量， 缺点： 体积会更大
                        maxSize: 10 * 1024
                    }
                }
            }
        ]
    },
    // 插件
    plugins: [
        // plugins的配置
    ],
    // webpack模式
    mode: "development"
}