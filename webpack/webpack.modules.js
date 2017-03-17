const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

const autoprefix = () => {
    return {
        loader: 'postcss-loader',
        options: {
            plugins: () => ([
                require('autoprefixer')
            ])
        }
    }
};

exports.loadTs = [
    {
        test: /\.ts$|\.tsx$/,
        exclude: /node_modules/,
        use: ["babel-loader", "awesome-typescript-loader"]
    }
];

exports.loadScss = [
    {
        test: /\.scss$/,
        include: /global.scss/,
        use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
        test: /\.scss$/,
        exclude: [/node_modules/, /global.scss/],
        use: ["style-loader", "typings-for-css-modules-loader?modules&namedExport&camelCase", "sass-loader"]
    }
];

exports.extractScss = [
    {
        test: /\.scss$/,
        include: /global.scss/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", autoprefix(), "sass-loader"]
        })
    },
    {
        test: /\.scss$/,
        exclude: [/node_modules/, /global.scss/],
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["typings-for-css-modules-loader?modules&namedExport&camelCase&localIdentName=PURIFY_[hash:base64:5]", autoprefix(), "sass-loader"]
        }),
    }
];

exports.devServer = {
    port: 3000,
    historyApiFallback: true,
    lazy: false,
    contentBase: paths.src,
};

exports.output = {
    path: paths.build,
    filename: 'bundle.js',
    publicPath: '/'
};

exports.resolve = {
    modules: [
        paths.src,
        paths.node_modules
    ],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".scss"]
};

exports.htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: paths.html,
    filename: 'index.html'
});

exports.uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    debug: false,
    beautify: false,
    mangle: {
        screw_ie8: true,
        keep_fnames: true
    },
    compress: {
        screw_ie8: true,
    }
});

exports.minifyCssPlugin = new OptimizeCSSAssetsPlugin({
    cssProcessor: cssnano,
    cssProcessorOptions: {
        options: {
            discardComments: {
                removeAll: true
            },
            safe: true
        }
    }
});

exports.extractTextPlugin = new ExtractTextPlugin('styles.css');

exports.entry = paths.app;
