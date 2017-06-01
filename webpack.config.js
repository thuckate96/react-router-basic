var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: [
    './app/appRe.js'
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    alias: {
      Home: path.resolve(__dirname, "app/components/Home"),
      Profile: path.resolve(__dirname, "app/components/Profile"),
      Login: path.resolve(__dirname, "app/components/Login"),
      Nav: path.resolve(__dirname, "app/components/Nav"),
      Transaction: path.resolve(__dirname, "app/components/Transaction"),
      LoginForm: path.resolve(__dirname, "app/components/Login/LoginForm")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
      NODE_ENV: JSON.stringify("production")
      }
     })
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
}
