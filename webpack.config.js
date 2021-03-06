var webpack = require('webpack');

module.exports = {
  entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx'
  ],
  externals: {
      jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
          '$':'jquery',
          'jQuery':'jquery'
      })
  ],
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
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            ErrorModal: 'app/component/ErrorModal.jsx',
            applicationStyles: 'app/styles/app.scss'
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