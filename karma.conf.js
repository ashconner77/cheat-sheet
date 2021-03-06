// import the webpack config to avoid repeating config settings
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

// Karma configuration
// Generated on Wed Dec 07 2016 16:31:08 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      './builds/bundle.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/sinon/pkg/sinon.js',
      './node_modules/bardjs/dist/bard.js',      
      './src/**/*spec.js',
      '*.html',
      './src/**/*.html'
    ],

   
    // list of files to exclude
    exclude: [
    ],

    webpack: webpackConfig,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
       './src/bundle.js': ['webpack'],   
        './src/**/*.html': ['ng-html2js']   
    },

     ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: './',
      moduleName: 'templates',
    },
    
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
