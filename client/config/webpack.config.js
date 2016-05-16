// Webpack dependencies
var path = require('path'),
    appRoot = path.resolve(__dirname, '../app'),
    webpack = require('webpack'),
    buildPath,
    ExtractTextPlugin = require('extract-text-webpack-plugin');

// Any script from packaje.json can receive an environment variable like this:
// ENV=production npm run watch
// and this can be used by webpack.DefinePlugin and passed to client/app/main.ts
const ENV = process.env.ENV;

//buildPath = path.resolve(__dirname, '../../static/znbmain');
buildPath = path.resolve(__dirname, '../../static');

module.exports = {
    context: path.resolve(__dirname, '../app'),
    entry: {
        main: [
            './main.ts',
            '../scss/main.scss'
        ],
        vendor: [
            './vendor.ts',
        ],
        polyfills: [
            './polyfills.ts',
        ]
    },
    output: {
        path: buildPath,
        publicPath: '../',
        filename: 'js/[name].bundle.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        extensions: ['', '.js', '.ts', 'tsx']
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.png$/,
                loader: "url",
                query: { 
                    mimetype: "image/png",
                    name: 'i/[name].[ext]',
                    limit: 10000
                }
            },
            {
                test: /\.jpg$/,
                loader: "url",
                query: { 
                    mimetype: "image/jpg",
                    name: 'i/[name].[ext]',
                    limit: 10000
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!autoprefixer?{browsers:["last 3 version"]}' + '!sass?outputStyle=compact&sourceMap=true&sourceMapContents=true')
            }
        ]
    }
};
