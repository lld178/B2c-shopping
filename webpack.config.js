const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./TS/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bunde.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    target: {
                      "chrome": 88,
                    },
                    "corejs": "3",
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      template: "./TS/index.html"
    }),

  ]
}