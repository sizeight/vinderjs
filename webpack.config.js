const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const nodeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProduction = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './lib/');

// Common plugins
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
      API_URL: isProduction ?
        JSON.stringify('') : JSON.stringify('http://127.0.0.1:8000'),
    },
  }),
  // Ignore all locale files of moment.js
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
];

if (process.env.ANALYSE === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  mode: nodeEnv,
  devtool: isProduction ? false : 'source-map',
  context: sourcePath,
  entry: 'index.js',
  output: {
    path: buildPath,
    filename: isProduction ? 'vinderjs.min.js' : 'vinderjs.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          'eslint-loader',
        ],
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }, // inline base64 URLs for <=8k images, direct URLs for the rest
      /*
      Font Awesome 4 uses the rest
      */
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      path.resolve(__dirname, './node_modules'),
    ],
  },
};
