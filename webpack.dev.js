const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map', //eval-cheap-module-source-map
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        host: 'localhost',
        port: 3000,
        open: true,
        hot: true,
        client: { overlay: true, },
        historyApiFallback: true
    },
});
