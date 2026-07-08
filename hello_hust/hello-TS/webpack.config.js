const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中的所有的配置信息都应该写在module.exports
module.exports = {
    mode: 'development',
    //指定入口文件
    entry: "./11LessTest/index.tsx",
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    //指定打包文件所在目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    //指定webpack打包时要使用模块
    module: {
        rules: [
            {
                test: /\.tsx?$/,  // 改为匹配 .ts 和 .tsx
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title:"这是一个自定义的title"
            template: "./src/index.html"
        }),
    ],
}