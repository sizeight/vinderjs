const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const nodeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProduction = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './src/');
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
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 1 version',
            '> 10%',
          ],
        }),
      ],
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
  entry: {
    vinderjs: 'index.js',
  },
  output: {
    path: buildPath,
    filename: isProduction ? '[name].min.js' : '[name].js',
    libraryTarget: 'commonjs2',
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
    ],
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules',
      // path.resolve(__dirname, './node_modules'),
    ],
  },
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
