# ng-nj.org

This is the source code for the webiste of ng-nj is the unofficial AngularJS group for New Jersey, USA. 

Please join our gitter here: [https://gitter.im/ng-nj/ng-nj.org](#https://gitter.im/ng-nj/ng-nj.org) 




Looking for contributors! If you are an Angular developer and happen to find yourself in New Jersey, come out to one of our "Crowd Coding" sessions. It's fun, informative, and there's free beer!


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
 files that hsould be hosted to go live.


`gulp test` - Runs karma with unit tests (Jasmine), also recreates Istanbul code
coverage

`gulp test:auto` - Reruns tests with hot reload on file changes.

`./node_modules/protractor/bin/protractor protractor-acceptance.js` - runs the 
cucumber acceptance tests with protractor ui tests in step definitions. 

Reports. Yes there are cucumber reports!
View current status:

Protractor acceptance outputs a json file to __. This folder then gets deployed
to the gh-pages site. Simple, yet oh so amazing useful.
