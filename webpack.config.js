const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
    filename: 'js/build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            // 'css':'vue-style-loader!css-loader',
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            // css: ExtractTextPlugin.extract({
            //   loader: 'css-loader'
            // })

          }
          // other vue-loader options go here
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    host: '0.0.0.0'
  },
  devtool: '#eval-source-map',
  plugins: [
    // new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      favicon: './src/img/bakeneko.jpg',
      filename: './index.html',
      template: './index.html',
      hash: true,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    })

  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin('css/style.css')
  ]),
  module.exports.module.rules[0].options.loaders.css = ExtractTextPlugin.extract({
    loader: 'css-loader'
  }),
  module.exports.module.rules[1].loader = ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: 'css-loader'
  })
}
