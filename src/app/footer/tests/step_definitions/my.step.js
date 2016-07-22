//
// var chai = require('chai');
// var expect = chai.expect;
//
// var inject = require('angular-mocks').inject;
//
//
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
//
// var myStepDefinitionsWrapper = function () {
//
//
//   var myCtrl2;
//
//   this.Given(/^Some shiz$/, function (callback) {
//
//
//     browser.get('/index.html');
//     // module('ngNjOrg');
//
//
//     callback();
//   });
//
//   this.When(/^I do shiz$/, function (callback) {
//
//     // myCtrl2.booyah();
//
//     inject(function ($controller, _mySvc_) {
//       var scope = {};
//       var mySvc = _mySvc_;
//       myCtrl2 = $controller('RegisterController as ctrl', {
//         $scope: scope
//       });
//     });
//
//     callback();
//   });
//
//   this.Then(/^shiz happens\.$/, function (callback) {
//     callback();
//   });
//
//
//
// };
// module.exports = myStepDefinitionsWrapper;
