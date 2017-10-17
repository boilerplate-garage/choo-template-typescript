module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/client.ts'
    ]
  },

  output: {
    path: __dirname + "/build",
    filename: '[name].js',
  },

  devServer: {
    contentBase: './build'
  },

  module: {
    rules: [
      {
        test: (/\.ts$/),
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }, {
          loader: "ts-loader"
        }]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.ts', '.js']
  }
};
