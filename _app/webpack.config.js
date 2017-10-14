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
    publicPath: './js/'
  },
  module: {
    rules: [
      {
        test: (/\.ts$/),
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }, {
          loader: "ts-loader"
        }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts']
  }
};
