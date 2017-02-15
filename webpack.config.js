module.exports = {
  entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/component/Main.jsx',
            Nav: 'app/component/Nav.jsx',
            Weather: 'app/component/Weather.jsx',
            About: 'app/component/About.jsx',
            Example: 'app/component/Example.jsx',
            Form: 'app/component/Form.jsx',
            Message: 'app/component/Message.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude:/(node_module|bower_components)/
    
            }
        ]
    },
    devtool: 'cheap-module-eval-map'
    
};