/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-07-28 03:53:22
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-07-28 04:15:56
 */
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: {
        'large-number': './src/index.js',
        'large-number.min': './src/index.js',
    },
    output: {
        filename: '[name].js',
        library: 'largeNumber',
        libraryTarget: 'umd',
        libraryExport: 'defualt',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
}