const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: "./12登录/index.tsx",
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
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
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
    devServer: {
        historyApiFallback: true,   // 关键：所有路由回退到 index.html
        headers: {
    'Content-Security-Policy': 
      "default-src 'self' http://localhost:8080 ws://localhost:8080 'unsafe-eval' 'unsafe-inline'; " +
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'; " +
      "connect-src *; "   // 允许任意源连接（含 webpack://）
  }
    }
};