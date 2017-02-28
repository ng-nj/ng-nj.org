'use strict';

//if (process.env.TRAVIS) {
// config.sauceUser = process.env.SAUCE_USERNAME;
//  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
//  config.capabilities = {
//    'browserName': 'chrome',
//    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
//    'build': process.env.TRAVIS_BUILD_NUMBER
//  };
// }

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;
var ProtractorReporter = require('protractor-html-screenshot-reporter');

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(new ProtractorReporter({
      baseDirectory: paths.e2e + '/screenshots'
    }))
  },

  resultJsonOutputFile: 'dist/reports/ui-e2e/ui-e2e-results.json',

  baseUrl: 'http://localhost:3000',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [paths.e2e + 'app/src/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
   showColors: false,
    defaultTimeoutInterval: 30000
  }
};
