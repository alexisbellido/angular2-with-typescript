// Webpack dependencies
var path = require('path'),
    appRoot = path.resolve(__dirname, '../app'),
    webpack = require('webpack'),
    buildPath,
    ExtractTextPlugin = require('extract-text-webpack-plugin');

// Any script from packaje.json can receive an environment value like this:
// NODE_ENV=production npm run watch
// process.env.NODE_ENV is conventionally used and the value can be used by webpack.DefinePlugin to pass to other modules
// or used here in webpack.config.js. See UglifyJsPlugin below.

let NODE_ENV = process.env.NODE_ENV || 'development';

// alternative for production check
// let isProduction = process.argv.indexOf('-p') !== -1;

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
                'NODE_ENV': JSON.stringify(NODE_ENV)
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

// UglifyJsPlugin and OccurrenceOrderPlugin run anyway with -p (alias for --optimize-minimize and --optimize-occurrence-order)
// but we have extra control here, disabling warnings, for example.
if ('production' === NODE_ENV) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
	  warnings: false
        }
    })
  );
  module.exports.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin()
  );
  module.exports.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
  module.exports.plugins.push(
    new webpack.optimize.AggressiveMergingPlugin()
  );
} else {
  // Enable sourcemaps for debugging webpack's output.
  module.exports.devtool = 'source-map';
}
