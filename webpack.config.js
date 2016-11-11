var path = require('path'),
    libPath = path.join(__dirname, 'lib'),
    wwwPath = path.join(__dirname, 'www'),
    pkg = require('./package.json'),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(libPath, 'index.js'),
    output: {
        path: wwwPath,
        filename: 'prototype-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /[\/]angular\.js$/, loader: 'exports?angular' },
        {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=img/[name].[ext]'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "ng-annotate?add=true!babel"
        }, {
            test: /\.scss$/,
            loader: "style!css!autoprefixer!sass"
        }, {
            test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/],
            loader: 'file?name=fonts/[name].[ext]'
        }]
    },
    resolve: {
        alias: {
            angular: __dirname + '/node_modules/ionic-sdk/release/js/ionic.bundle'
        },
        extensions: ['', '.js', '.json', '.scss', '.html'],
        root: [
            libPath,
            path.join(__dirname, 'node_modules')
        ],
        moduleDirectories: [
            'node_modules'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            pkg: pkg,
            template: path.join(libPath, 'index.html')
        })
    ]
};
