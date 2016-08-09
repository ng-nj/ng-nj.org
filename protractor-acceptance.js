'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  resultJsonOutputFile: 'dist/reports/acceptance-protractor/acceptance-protractor-results.json',

  baseUrl: 'http://localhost:3000',

  // Spec patterns are relative to the current working directory when
  // protractor is called.

  // specs: [
  //   'cucumber/*.feature'
  // ],
  // specs: [paths.features + '/**/*.js'],
  specs: [paths.features + '/**/*.feature'],
  // [paths.features + '/**/*.step.js'],
  // specs: ['features/my-component/my-component.feature'],

  cucumberOpts: {
    format: 'pretty',
    // require: paths.features + './**/*.js'
    // require: paths.features + '/my-component/my-component.js'
    // require: 'features/my-component/my-component.step.js'
    require: './**/*.step.js',
    // tags: '@dev',
    // profile: false,
    // 'no-source': true
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 25000
    //   showColors: true,
  }

};
