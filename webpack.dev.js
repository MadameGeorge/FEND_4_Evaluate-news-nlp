const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        libraryTarget: 'var',
		library: 'Client'
	},
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
             // Simulate the removal of files
            //
            dry: true,

            // Write Logs to Console
            // (Always enabled when dry is true)
            //
            verbose: true,

            // Automatically remove all unused webpack assets on rebuild
            //
            cleanStaleWebpackAssets: true,

            // Do not allow removal of current webpack assets
            //
            // default: true
            protectWebpackAssets: false,
        }),
    ]
});