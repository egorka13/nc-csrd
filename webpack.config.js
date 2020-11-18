const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    output: {
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ["@babel/preset-env"]
          }
        }
      ]
    }
  };

// module.exports = {
//     entry: './client/index.js',
//     output: {
//         filename: 'bundle.[chunkhash].js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devServer: {
//         port: 3000
//     },
//     plugins: [
//         new htmlPlugin({
//             template: './client/index.html'
//         }),
//         new CleanWebpackPlugin()
//     ],
// }