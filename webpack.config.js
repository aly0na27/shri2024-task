const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/main.jsx', // точка входа
    output: {
        filename: 'bundle.js', // имя собранного файла
        path: path.resolve(__dirname, 'dist'), // путь для сохранения собранного файла
        publicPath: '', // публичный путь (для webpack-dev-server и др.),
        assetModuleFilename: 'assets/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // загрузчик для JavaScript (используется Babel)
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // используемые пресеты для Babel
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'] // загрузчики для CSS файлов
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html', // путь к вашему шаблону index.html
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
};