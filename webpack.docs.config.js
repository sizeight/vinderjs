const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const nodeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProduction = nodeEnv === 'production';

const entryPath = path.join(__dirname, './docs-site/src/index.js');
const buildPath = path.join(__dirname, './docs-site/');

module.exports = {
  mode: nodeEnv,
  devtool: isProduction ? false : 'source-map',
  entry: {
    'docs-site': entryPath,
  },
  output: {
    path: buildPath,
    filename: isProduction ? 'bundle.min.js' : 'bundle.js',
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
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    // Needed to direct the docs to the local version of the vinderjs, this is not needed for
    // normal setup.
    alias: {
      // '@vinder/vinderjs': path.resolve('./src/index.js'),
      '@vinder/vinderjs': path.resolve('./lib/react-vorms.min.js'),
    },
  },
};
