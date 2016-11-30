var webpack = require("webpack");
module.exports = {
  entry: './src/index.js',
  output :{
    path: 'builds',
    filename: 'bundle.js',
  },
  plugins: [
       new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      })
   ]
}
