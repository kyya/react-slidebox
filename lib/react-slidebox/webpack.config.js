const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: {
        'react-slidebox': './src/index.js'
    },
    externals: ['react', 'prop-types'],
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
        library: 'ReactSlideBox',
        libraryTarget: 'umd'
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
                        localIdentName: '[local]__[hash:base64:5]'
                    }
                },
                'sass-loader'
            ]
        }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}
