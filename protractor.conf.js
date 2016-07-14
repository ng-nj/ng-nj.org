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

//config.sauceUser = 'JimTheMan';
//config.sauceKey = '7c90507b-1930-450d-826e-6aa236b40e03';
//config.capabilities = {
//  'browserName': 'chrome',
//  'tunnel-identifier': '1',
//  'build': '1'

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },


  resultJsonOutputFile: 'e2e/report/my-test.json',

  baseUrl: 'http://localhost:3000',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [paths.e2e + '/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
   showColors: false,
    defaultTimeoutInterval: 30000
  }
};
