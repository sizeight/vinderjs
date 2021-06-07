const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const nodeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProduction = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './src/');
const buildPath = path.join(__dirname, './lib/');

// Common plugins
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
      API_URL: isProduction
        ? JSON.stringify('') : JSON.stringify('http://127.0.0.1:8000'),
    },
  }),
  new ESLintPlugin(),
];

if (process.env.ANALYSE === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  mode: nodeEnv,
  devtool: isProduction ? false : 'source-map',
  context: sourcePath,
  entry: {
    vinderjs: `${sourcePath}index.js`,
  },
  output: {
    path: buildPath,
    filename: isProduction ? '[name].min.js' : '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
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
    ],
  },
  plugins,
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'prop-types': {
        root: 'prop-types',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
      },
    },
    {
      reactstrap: {
        root: 'reactstrap',
        commonjs2: 'reactstrap',
        commonjs: 'reactstrap',
        amd: 'reactstrap',
      },
    },
    {
      'isomorphic-fetch': {
        root: 'isomorphic-fetch',
        commonjs2: 'isomorphic-fetch',
        commonjs: 'isomorphic-fetch',
        amd: 'isomorphic-fetch',
      },
    },
  ],
};
