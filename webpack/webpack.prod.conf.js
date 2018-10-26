const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        filename: "js/[name].[chunkhash:16].js"
    },
    module: {
        rules:
            [
                {
                    test: /\.s?[ac]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { 
                            loader: 'css-loader',
                            options: { 
                                url: false,
                                sourceMap: true 
                            } 
                        },
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ],
                }
            ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin()
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
                },
                vendor: {
                    priority: 10,
                    test: /node_modules/,
                    name: "vendor",
                    enforce: true,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        })
    ]
})
