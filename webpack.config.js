const path = require('path');
var glob = require("glob");

module.exports = {
  mode: "development",
  entry: {
    app: glob.sync("./js/*.js")
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
      }]
    }]
  },
};