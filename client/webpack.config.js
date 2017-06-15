// For inspiration on your webpack configuration, see:
// https://github.com/shakacode/react_on_rails/tree/master/spec/dummy/client
// https://github.com/shakacode/react-webpack-rails-tutorial/tree/master/client

const webpack = require('webpack');
const {resolve} = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');
const webpackConfigLoader = require('react-on-rails/webpackConfigLoader');

const configPath = resolve('..', 'config');
const {devBuild, manifest, webpackOutputPath, webpackPublicOutputDir} =
    webpackConfigLoader(configPath);

const config = {

    context: resolve(__dirname),

    entry: {
        'webpack-bundle': [
            'es5-shim/es5-shim',
            'es5-shim/es5-sham',
            'babel-polyfill',
            './app/bundles/Restaurants/startup/registration',
        ],
    },

    output: {
        // Name comes from the entry section.
        filename: '[name]-[hash].js',

        // Leading slash is necessary
        publicPath: `/${webpackPublicOutputDir}`,
        path: webpackOutputPath,
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false,
        }),
        new ManifestPlugin({fileName: manifest, writeToFileEmit: true}),
    ],

    module: {
        rules: [
            {
                test: require.resolve('react'),
                use: {
                    loader: 'imports-loader',
                    options: {
                        shim: 'es5-shim/es5-shim',
                        sham: 'es5-shim/es5-sham',
                    },
                },
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                minimize: true,
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[hash:base64:6]',
                            },
                        },
                        'postcss-loader',
                    ],
                }),
                // loader: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         {
                //             loader: 'css-loader',
                //             options: {
                //                 minimize: true,
                //                 modules: true,
                //                 importLoaders: 1,
                //                 localIdentName: '[name]__[local]__[hash:base64:5]',
                //             },
                //         },
                //         'postcss-loader',
                //     ],
                // }),
                // use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                modules: true,
                                importLoaders: 3,
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                // plugins: 'autoprefixer'
                            }
                        },
                        'sass-loader',
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: './app/assets/styles/app-variables.scss'
                            },
                        }
                    ],
                }),
            },
        ],
    },
};

config.plugins.push(
    new ExtractTextPlugin({
        filename: '[name]-bundle.css',
        allChunks: true,
    })
);


module.exports = config;

if (devBuild) {
    console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
    module.exports.devtool = 'eval-source-map';
} else {
    console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
