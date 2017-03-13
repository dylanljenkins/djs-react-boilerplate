const webpack = require('webpack');
const merge = require('webpack-merge');
const modules = require('./webpack/webpack.modules');
const isProduction = process.argv.indexOf('-p') >= 0;

const common = {
    resolve: modules.resolve,
    entry: modules.entry,
    output: modules.output,
    plugins: [
        modules.htmlWebpackPlugin
    ],
    module: {
        rules: modules.loadTs
    }
};

const dev = {
    devtool: 'eval-source-map',
    devServer: modules.devServer,
    module: {
        rules: modules.loadScss
    }
};

const prod = {
    plugins: [
        modules.uglifyJsPlugin,
        modules.extractTextPlugin,
        modules.minifyCssPlugin,
    ],
    module: {
        rules: modules.extractScss
    }
};

module.exports = () => {
    return merge.smart(common, isProduction ? prod : dev);
};