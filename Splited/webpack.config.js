const path = require('path');
// const EncodingPlugin = require('webpack-encoding-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        //filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        // new EncodingPlugin({encoding: 'utf-8'}), // 配置 webpack 打包的字符编码格式
        // new HtmlWebpackPlugin({title: '管理输出'}), // 自动生成 dist/index.html 文件
        // new CleanWebpackPlugin(),   // 自动清理 dist 目录


    ]
};