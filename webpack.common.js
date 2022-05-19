const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        main: './src/main.js',
        // add: './src/add.js',
        // multiply: './src/multiply.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[contenthash:8].js', // css는 contenthash
        //assetModuleFilename: 'dist/asset/[name].[hash:8].[ext]', asset을 모두 여기 넣음
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            '@': __dirname + '/src',
            // components: __dirname + '/src/components'
        },
        extensions: ['.js', '.css', '.ts']
    },
    //externals : 번들에 포함 안시키고 외부에서 불러오기
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [__dirname + '/src'],
                exclude: ['/node_modules'],
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: './.babelrc',
                    },
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                //  사이즈지정 기본은 8kb
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 4 * 1024 // 4kb
                //     }
                // }
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            // minify: false,
            showErrors: false
        }),
        //new ForkTsCheckerWebpackPlugin() 타입검사 별도 실행
    ],
};
