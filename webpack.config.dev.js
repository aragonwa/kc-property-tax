import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index') //entry point of app
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|svg|gif)$/i,
        use: [ "file-loader" ]
      },
    ]
  }
}
