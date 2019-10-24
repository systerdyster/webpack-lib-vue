/*jshint esversion: 6 */

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}, argv = {}) => {

    var config = {
        entry: {
            index: path.join(__dirname, "src", "index.ts")
        },

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
            library: '[name]',
            libraryTarget:'umd',
            umdNamedDefine: true
        },

        target: "web",
        devtool: false,
        plugins: [
        ],

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    use: [{ loader: 'ts-loader' }],
                    include: [
                        path.join(__dirname, "src")
                    ]
                },
                {
                    test: /.(pug|jade)$/,
                    use: ['html-loader',
                        {
                            loader: 'pug-html-loader',
                            query: {}  
                        }],
                    include: [
                        path.join(__dirname, "src")
                    ]
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true
                            }
                        }, 'sass-loader?sourceMap=true'],
                    include: [
                        path.join(__dirname, "src/style")
                    ]
                }
            ]
        },

        resolve: {
            extensions: [".ts", ".js", ".sass", ".scss"],
            modules: [ path.resolve(__dirname, 'src'), "node_modules" ],
            alias: {
                'vue$': 'vue/dist/vue.js'
            }
        },
        
        externals: {
            vue: 'Vue',
            'vue-class-component': 'vue-class-component'
        }
    };

    return config;
};
