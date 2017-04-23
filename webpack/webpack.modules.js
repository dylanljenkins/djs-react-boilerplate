// Describes webpack modules that can be used by either the development or production builds.

const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
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

exports.loadDefault = [
    {
        test: /\.ts$|\.tsx$/,
        exclude: /node_modules/,
        use: ["babel-loader", "awesome-typescript-loader"]
    },
    {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff&name=/[name].[ext]" },
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-sfnt&name=/[name].[ext]" },
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/vnd.ms-fontobject&name=/[name].[ext]" },
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml&name=/[name].[ext]" },
    {test: /\.png(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader?name=/[name].[ext]" },
    {test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader?name=/[name].[ext]" },
];

exports.loadJs = [
    {
        test: /\.js$/,
        use: ["babel-loader"]
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
        use: ["style-loader", "css-loader?modules&namedExport&camelCase", "sass-loader"]
    },
    {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
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
            use: ["css-loader?modules&namedExport&camelCase", autoprefix(), "sass-loader"]
        }),
    },
    {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", autoprefix()]
        })
    }
];

exports.devServer = {
    port: 3000,
    historyApiFallback: true,
    lazy: false,
    contentBase: paths.src,
};

exports.devOutput = {
    path: paths.build,
    filename: 'bundle.js',
    publicPath: '/'
};

exports.prodOutput = {
    path: paths.static,
    filename: 'bundle.js',
    publicPath: '/static'
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

exports.compressionPlugin = new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$/,
    threshold: 10240,
    minRatio: 0.8
});

exports.extractTextPlugin = new ExtractTextPlugin('styles.css');

exports.entry = paths.app;
