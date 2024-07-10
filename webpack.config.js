const path = require('path');

module.exports = {
    entry: './src/main.jsx', // точка входа
    output: {
        filename: 'bundle.js', // имя собранного файла
        path: path.resolve(__dirname, 'dist'), // путь для сохранения собранного файла
        publicPath: '/' // публичный путь (для webpack-dev-server и др.)
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
                use: ['style-loader', 'css-loader'] // загрузчики для CSS файлов
            }
        ]
    }
};