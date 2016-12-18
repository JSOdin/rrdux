import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    /*devtool: 'inline-source-map',*/
    devtool: 'inline-eval-cheap-source-map',
    noInfo: false,  // lists a list of all files being bundled
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',  // context of our bundling. "web" is the browser, but can be "node"
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',    // the apparent path in html this will map to our actual file paths
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        inline:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // allow us to replace modules without browser refresh
        new webpack.NoErrorsPlugin()    // prevent errors from breaking our process
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};