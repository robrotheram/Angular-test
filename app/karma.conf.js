// Karma configuration
// Generated on Tue Apr 28 2015 14:16:43 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'components/jquery/dist/jquery.min.js',
      'components/angular/angular.min.js',
      'components/angular-mocks/angular-mocks.js',
      'components/angular-route/angular-route.min.js',
      'components/bootstrap/dist/js/bootstrap.min.js',
      'components/d3/d3.min.js',
      'components/topojson/topojson.js',
      'components/highcharts-ng/dist/highcharts-ng.min.js',
      'components/nouislider/jquery.nouislider.js',
      'components/nouislider/Link.js',
      'components/angular-nouislider/src/nouislider.js',
      {pattern:'js/**/*.js',included: true },
      {pattern:'views/*.html',included: true },
      {pattern:'test/**/*.js',included: true }


    ],


    // list of files to exclude
    exclude: [
    ],


    /// coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'js/**/*.js': ['coverage'],
      '*.html': ['ng-html2js']

    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


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
    singleRun: false
  });
};
