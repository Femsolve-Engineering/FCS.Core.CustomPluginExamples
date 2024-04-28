const path = require('path');

module.exports = {
    mode: 'development', // Use 'production' for minified production builds
    entry: {
        Viewer: './Viewer.ts',
    },
    output: {
        filename: 'exampleViewer.js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]',
        libraryTarget: 'umd',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
};