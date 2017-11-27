const path = require('path');
const APP_DIR = path.join(__dirname, '/client');
const BUILD_DIR = path.resolve('dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: path.join(APP_DIR, 'index.js'),
    output: {
        path: BUILD_DIR,
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ ,include: APP_DIR },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, include: APP_DIR }
        ]
    },

    plugins: [HtmlWebpackPluginConfig]
};