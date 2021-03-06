module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname,
        filename: 'app.js'
    },

    devServer: {
        inline: true,
        port: 8080,
        contentBase: __dirname + '/public'
    },

    module:
    {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};
