const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    //入口文件的路径
    entry: "./src/index.tsx",
    output: {
        //打包的输出路径
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // 添加需要解析的文件格式
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
       // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            { test: /\.tsx?$/, use: [
                { loader: 'babel-loader', options: {
                  exclude: 'node_modules',
                }},
                'ts-loader',
            ]},
            { 
                test: /\.s?css$/, 
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
    },
    // 启用sourceMap
    devtool: "source-map",
}