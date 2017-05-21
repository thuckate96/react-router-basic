var path = require("path");
module.exports = {
  entry: './app/appRe.js',
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, "app/components/Main"),
      HomePage: path.resolve(__dirname, "app/components/HomePage"),
      Account: path.resolve(__dirname, "app/components/Account"),
      Nav: path.resolve(__dirname, "app/components/Nav"),
      Transaction: path.resolve(__dirname, "app/components/Transaction")
    }
  },
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
