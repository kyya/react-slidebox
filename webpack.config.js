const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js',
        framework: ['react', 'react-dom', 'prop-types']
    },
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash:16].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            cacheGroups: {
                framework: {
                    priority: 200,
                    test: "framework",
                    name: "framework",
                    enforce: true,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:16].css'
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
        }),
    ]
}

