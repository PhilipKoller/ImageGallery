const path = require('path');

module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.join(__dirname, '/client/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3010,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                        "style-loader",
                         "css-loader"
                     ],
            }
        ]
    }
};