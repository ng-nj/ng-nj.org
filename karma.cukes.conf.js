
module.exports = function(config) {


  config.set({

    // activate framework
    frameworks: ['karma-cukes'],

    // specify feature files and support code
    files: [
      {pattern: '**/*.feature', included: false},
      'dev/**/step-definitions.js',
      'dev/**/hooks.js'
    ],

    // forward command line arguments to CucumberJS
    client: {
      args: process.argv.slice(4),
    },

    // activate reporters (kc-progress, kc-pretty, and/or kc-json)
    reporters: ['kc-pretty', 'kc-json'],

    // configure the JSON formatter
    kcJsonReporter: {
      outputDir: 'dev/reports/behaviour',
      outputFile: 'karma-cukes-{shortBrowserName}.json' // supported placeholders: `shortBrowserName`, `browserName`
    },

    // enable colors in the output
    colors: true,

    // proxy test server requests for end-to-end testing
    proxies: {
      "/": "http://localhost:8889/"
    },

    // use a root URL for the karma runner that does not interfere with proxied sites
    urlRoot: "/__karma__/",


  })


}
