const modules = require('./webpack.modules');
const webpack = require('webpack');
const paths = require('./paths');

let config = {
    target: 'node',
    entry: paths.server,
    output: {
        path: paths.build,
        filename: 'server.js'
    },
    node: {
        console: true,
        __filename: true,
        __dirname: true
    },
    resolve: modules.resolve,
    module: {
        rules: modules.loadJs
    },
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less|scss|svg|png|jpe?g|png)$/),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;
