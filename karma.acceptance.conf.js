'use strict';

var path = require('path');
var conf = require('./gulp/conf');

var _ = require('lodash');
var wiredep = require('wiredep');

var pathSrcHtml = [
  path.join(conf.paths.src, '/**/*.html')
];

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  var patterns = wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.src, '/app/**/*.module.js'),
      path.join(conf.paths.src, '/app/**/*.js'),
      path.join(conf.paths.src, '/**/*.spec.js'),
      path.join(conf.paths.src, '/**/*.mock.js'),
    ])
    .concat(pathSrcHtml);

  var files = patterns.map(function(pattern) {
    return {
      pattern: pattern
    };
  });
  files.push({
    pattern: path.join(conf.paths.src, '/assets/**/*'),
    included: false,
    served: true,
    watched: false
  });
  return files;
}

module.exports = function(config) {

  var configuration = {
      files: [
        // These are not watched because they're not expected to change.
        // These are not included because they are not JavaScript files and Karma inserts
        // these as <script> tags.
        // These are served however, as the adapter will load them into the captured browsers.
        // The cucumber-html.css file can be copied and customized, simply change the path.
        // The adapter will load any file ending with '.css' into the captured browsers.
        {pattern: 'node_modules/karma-cucumberjs/vendor/cucumber-html.css', watched: false,
          included: false, served: true},
        {pattern: '/app.unit.template.html', watched: false, included: false, served: true},


        // These are not included because they're text feature files and shouldn't go in script tags.
        // These are watched because feature files will change during dev and you want Karma to run
        // tests when these change.
        // These are served by Karma so the adapter can load their contents when its time to test.
        {pattern: '/**/*.unit.feature', watched: true, included: false, served: true},



        // The step definitions should be loaded last so the adapter can load the global functions
        // needed by the step defs.
        // The step defs are watched and served so Karma runs when they change.
        {pattern: '/**/*.unit.step.js', watched: true, included: true, served: true}
      ],

    // frameworks: ['jasmine', 'angular-filesort','karma-cucumberjs'],
    framework: ['cucumberjs'],


    singleRun: true,

    autoWatch: false,

    ngHtml2JsPreprocessor: {
      stripPrefix: conf.paths.src + '/',
      moduleName: 'ngNjOrg'
    },

    logLevel: 'WARN',

    // frameworks: ['jasmine', 'angular-filesort'],
    // frameworks: ['cucumberjs', 'angular-filesort'],

    angularFilesort: {
      whitelist: [path.join(conf.paths.src, '/**/!(*.html|*.spec|*.mock).js')]
    },

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-coverage',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    coverageReporter: {
      type : 'html',
      dir : 'dist/reports/acceptance-unit'
    },

    reporters: ['progress'],

    proxies: {
      '/assets/': path.join('/base/', conf.paths.src, '/assets/')
    }
  };

  // This is the default preprocessors configuration for a usage with Karma cli
  // The coverage preprocessor is added in gulp/unit-test.js only for single tests
  // It was not possible to do it there because karma doesn't let us now if we are
  // running a single test or not
  configuration.preprocessors = {};
  pathSrcHtml.forEach(function(path) {
    configuration.preprocessors[path] = ['ng-html2js'];
  });

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};
