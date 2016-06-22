var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['jsdom'], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      //'tests.webpack.js' //just load this file
        './src/**/*.spec.js'
    ],
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-jsdom-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha-reporter'
    ],
    preprocessors: {
        'src/**/*!(.spec).js': [ 'webpack', 'sourcemap', 'coverage'], //preprocess with webpack and our sourcemap loader
        'src/**/*.spec.js': [ 'webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
        //'tests.webpack.js': [ 'webpack', 'sourcemap', 'coverage']
    },
    reporters: [ 'mocha', 'coverage' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader'
          }
        ],
        postLoaders: [{ //delays coverage til after tests are run, fixing transpiled source coverage error
          test: /\.js?$/,
          exclude: /(__test__|node_modules)\//,
          loader: 'istanbul-instrumenter' } ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    coverageReporter: {
      type: 'html', //produces a html document after code is run
      dir: 'coverage/' //path to created html doc
    }
  });
};