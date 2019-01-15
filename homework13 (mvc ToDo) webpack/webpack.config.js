const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: ['./src/js/hw13.js', './src/scss/style.scss', './src/css/style.css'] ,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hw13.js',
        publicPath: 'dist/',
        sourceMapFilename: '[file].map'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },{
                test: /\.scss$/,
                use: [{
                    loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },{
                test: /\.css$/,
                use: [
                    {loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader},
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true},
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename:'style.css'})
    ]
};

module.exports =  (env, option) => {
    let production = option.mode == 'production';
    conf.devtool = production ? false : 'inline-source-map';
    return conf;
}