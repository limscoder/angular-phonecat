var webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: {
    components: './app/js/components/components.react.js'
  },

  output: {
    publicPath: '',
    path: 'app/reactComponents',
    filename: 'reactComponents.js',
    library: 'reactComponents',
    libraryTarget: 'var'
  },

  resolve: {
    modulesDirectories: ['./app/js/components', 'node_modules'],
    extensions: ['', '.js']
  },

  externals: [{
    react: "React"
  }],

  module: {
    loaders: [
      {
        test: /\.react.js/,
        loader: "jsx-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};