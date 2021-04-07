const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
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
      } 
    ]
  }
  
  
}