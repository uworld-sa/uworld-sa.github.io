const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let conf = {
    entry: ['./src/js/hw13.js', './src/scss/style.scss'] ,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hw13.js',
        publicPath: 'dist/'
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports =  (env, option) => {
    let production = option.mode == 'production';
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
}