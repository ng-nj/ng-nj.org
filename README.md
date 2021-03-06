
[![Build Status](https://travis-ci.org/ng-nj/ng-nj.org.svg?branch=master)](https://travis-ci.org/ng-nj/ng-nj.org)

![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=<badge_key>)

Proudly running tests on Browserstack!
 
<img src="./Logo-01.svg" width="250px"/>

![Browserstack Logo](https://github.com/ng-nj/ng-nj.org/blob/master/Logo-01.svg "Browserstack Logo")

# ng-nj.org

This is the source code for the webiste of ng-nj is the unofficial AngularJS group for New Jersey, USA!

Please join our gitter here: [https://gitter.im/ng-nj/ng-nj.org](#https://gitter.im/ng-nj/ng-nj.org) 




Looking for contributors! If you are an Angular developer and happen to find yourself in New Jersey, come out to one of our "Crowd Coding" sessions. It's fun, informative, and there's free beer!


### Setup

First, install dependencies:

`bower i`

and then

`npm i`

Then update webdriver for running protractor:
`./node_modules/protractor/bin/webdriver-manager update`


---

### Shell Scripts!
Oh yes, in this project we've got scripts for days! Most of them are gulp scripts.
Here is a list of the shell commands you can run and what they do.

`gulp serve` - Good old gulp serve! This will throw your application up on a local
server so you can test in your browser and debug with tools like Chrome dev tools. 
This project also has hot reload to automatically refresh the browser on file 
changes (note: you may need to re-run this command after creating / deleting files).

`gulp` or `gulp build` - packages, minifies, uglifies, and does a ton of other stuff
 to the source files before dumping them in the **dist/** directory. Those are the 
 files that should be hosted to go live.


`gulp test` - Runs karma with unit tests (Jasmine), also recreates Istanbul code
coverage

`gulp test:auto` - Reruns tests with hot reload on file changes.

`gulp protractor` - Runs protractor and recreates a ui/e2e report.

`gulp protractor:dist` - Runs protractor against the production build files
and recreates a ui/e2e report.

`./node_modules/protractor/bin/protractor protractor-acceptance.js` - runs the 
cucumber acceptance tests with protractor ui tests in step definitions. 

`./node_modules/karma/bin/karma start karma.acceptance.conf.js` - runs the 
cucumber acceptance tests with karma unit tests in step definitions. 

Reports. Yes there are reports!
View current status:

## Classic UI / E2e Reports
e2e/screenshots/report.html

## Classic Code Coverage Report
e2e/screenshots/report.html

For protractor tests, use npm 4.2.0 (nvm use 6.9.5).
