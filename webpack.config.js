const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    before: function(dist, server){
          server._watch('./app/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=images/[name].[ext]',
      },
      // font-awesome
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      }, 
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })],
  
  
}