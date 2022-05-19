const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        clean: true
    },
    devtool: 'source-map',
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    // test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            }
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true, //병렬 압축
                terserOptions: {
                    compress: {
                        drop_console: true, // 콘솔 로그를 제거
                    },
                },
            }),
            //new CssMinimizerPlugin() css 압축
        ],
        //plugins: [
        //new webpack.DefinePlugin 변수정의 및 사용
        //new webpack.EnvironmentPlugin 환경 변수 설정
        //new Webpack.BannerPlugin() 결과물에 주석 넣기
        //new webpack.ProvidePlugin 전역으로 설정되어서 import 하지 않아도 됨
        //new MiniCssExtractPlugin() 외부 css 만듬 [MiniCssExtractPlugin.loader, "css-loader"]
        //],
    }
});
