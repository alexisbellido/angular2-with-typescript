// Webpack dependencies
var path = require('path'),
    appRoot = path.resolve(__dirname, '../app'),
    webpack = require('webpack'),
    buildPath,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
// Get value from command line
    production = process.env.PRODUCTION === 'true',
    development = process.env.DEVELOPMENT === 'true';

if ( development ) {
    buildPath = '/home/alexis/zinibu/static/znbmain';
} else {
    buildPath = path.resolve(__dirname, '../../static/znbmain');
}

module.exports = {
    context: path.resolve(__dirname, '../app'),
    entry: {
        main: [
            './main.ts',
            '../scss/main.scss'
        ],
        vendor: [
            './vendor.ts',
        ]
    },
    output: {
        path: buildPath,
        publicPath: '../',
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.ts$/,
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
