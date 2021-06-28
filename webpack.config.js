const path = require('path');
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
}
const PAGES_DIR = `${PATHS.src}\\pug\\`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    entry: './src/js/main.js',
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "src/scss"),
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
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },]
            }, {
                test: /\.js$/,
                include: path.resolve(__dirname, "src/js"),

            }, {
                test: /\.pug$/,

                use: ['raw-loader', 'pug-plain-loader']

            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name].css'
        }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}\\${page}`,
            filename: `${PATHS.dist}/${page.replace(/\.pug/, '.html')}`
        }))
    ],
}
