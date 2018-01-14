const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
// const isDevelopment = process.env.NODE_ENV === 'development'||!process.env.NODE_ENV;
const distPath = path.resolve(__dirname, 'dist');
const publicPath = '/';
const resolveExts = ['.js', '.jsx', '.json', '.scss', '.css'];
const resolveAlias = {
  app: path.resolve(__dirname, 'src/'),
  assets: path.resolve(__dirname, 'src/assets/'),
};

const jsLoaders = [
  {
    test: /.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
  },
];

const htmlLoaders = [
  {
    test: /\.html$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
  },
];

const sassLoaders = [
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            sourceMap: true,
          },
        },
      ],
    }),
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
];

const fileLoaders = [
  // {
  //   test: /assets\/.*/,
  //   use: `file-loader?context=static&name=[path][name]${isProduction ? '.[hash]' : ''}.[ext]`,
  // },
  { 
    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
    loader: 'file-loader?name=assets/[name].[hash].[ext]',
  },
];

const plugins = [
  new HtmlWebPackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html',
    inject: 'body',
  }),
  new ExtractTextPlugin({
    filename: `app-bundle${isProduction ? '.[contenthash]' : ''}.css`,
    allChunks: true,
  }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: Infinity,
  // }),
];

module.exports = {
  resolve: {
    alias: resolveAlias,
    extensions: resolveExts,
  },
  entry: {
    vendor: [
      'react', 'react-dom', 'redux', 'react-redux', 'axios',
      'history', 'react-router', 'react-router-dom', 'reactstrap',
      'redux-thunk',
    ],
    client: './src/index.js',
  },
  devtool: 'source-map',
  output: {
    path: distPath,
    filename: `app-bundle${isProduction ? '.[chunkhash]' : '-[name]'}.js`,
    chunkFilename: `app-bundle-[name]${isProduction ? '.[chunkhash]' : '-[name]'}.js`,
    publicPath,
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [...jsLoaders, ...htmlLoaders, ...sassLoaders, ...fileLoaders],
  },
  plugins,
};
