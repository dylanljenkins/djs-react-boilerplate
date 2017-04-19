// This is the root webpack file. It describes how webpack should build the webapp in either prod or dev mode.

const webpack = require('webpack');
const merge = require('webpack-merge');
const modules = require('./webpack/webpack.modules');
const isProduction = process.argv.indexOf('-p') >= 0;

const common = {
    resolve: modules.resolve,
    entry: modules.entry,
    plugins: [
        modules.htmlWebpackPlugin
    ],
    module: {
        rules: modules.loadTs
    }
};

const dev = {
    devtool: 'eval-source-map',
    output: modules.devOutput,
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
        modules.compressionPlugin
    ],
    output: modules.prodOutput,
    module: {
        rules: modules.extractScss
    }
};

module.exports = () => {
    return merge.smart(common, isProduction ? prod : dev);
};