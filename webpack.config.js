const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const webpack = require('webpack')

module.exports = {
    mode: 'production', 
    entry: {
        'slide-box': './src/index.js'
    },
    externals: ['react', 'prop-types'],
    devtool: 'source-map',
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, "lib"),
        library: 'SlideBox',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true,
        publicPath: '/'
    },

    module: {
        rules: [
        { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader'
        },
        { 
            test: /\.scss$/, 
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]--[local]-[hash:base64:5]'
                    }
                },
                'sass-loader'
            ]
        }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: true,
                    warnings: false,
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        new webpack.LoaderOptionsPlugin({
            debug: false
        }),
        new CleanWebpackPlugin(['lib'])
    ]
}

