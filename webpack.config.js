const path = require('path');
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')
const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
}
const PAGES_DIR = `${PATHS.src}/pug/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    entry: './src/js/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./[name].bundle.js",
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // include: path.resolve(__dirname, "src/scss"),
                use: ['style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },]
            },{
                test: /\.css$/,
                // include: path.resolve(__dirname, "src/scss"),
                use: ['style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                    }, {
                        loader: 'resolve-url-loader',
                    }]
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src/js"),
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: false
                        }
                    },
                    {
                        loader: "pug-html-loader",
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash].[ext]'
                }
            },{
                test: /\.ico$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.(woff|ttf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name].css'
        }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `${PATHS.dist}/${page.replace(/\.pug/, '.html')}`
        })),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "global.window.jQuery": "jquery"
        }),
    ],
}
