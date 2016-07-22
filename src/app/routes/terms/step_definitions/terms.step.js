// var myStepDefinitionsWrapper = function () {
//
//
//   'use strict';
//   var chai = require('chai');
//   var expect = chai.expect;
//   var chaiAsPromised = require('chai-as-promised');
//   chai.use(chaiAsPromised);
//
//   var page;
//
//
//   this.Given(/^that I am a Gperson$/, function (callback) {
//        callback();
//        });
//
//   this.When(/^I do Gstuff$/, function (callback) {
//     callback();
//   });
//
//   this.Then(/^I have some Gother stuff$/, function (callback) {
//     callback();
//   });
//
//
//   this.Given(/^the user is on the terms page$/, function (callback) {
//
//     browser.get('http://localhost:3000/#/terms');
//     page = require('./terms.po.js');
//
//     callback();
//
//   });
//
//   this.When(/^the terms page loads$/, function (callback) {
//
//     // Protractor will automatically resolve promises and
//     // waits for the page to load so there's nothing really
//     // to do here.
//
//
//
//     callback();
//   });
//
//   this.Then(/^the terms text should be displayed$/, function (callback) {
//
//     console.log('value: ' + page.termsContent.getAttribute('value'));
//
//     // expect(page.termsContent.getAttribute('value')).to.eventually.equal("5");
//
//     // expect(page.termsContent.getAttribute('value')).to.eventually.equal('5');
//     expect(page.termsContent.isPresent()).to.eventually.equal(false);
//
//     // expect(element(by.name('header')).getAttribute('value')).to.eventually.equal("5");
//     // expect(element(by.name('header')).getInnerHtml()).to.eventually.equal("5");
//
//
//     callback();
//   });
//
//
//
//
// };
// module.exports = myStepDefinitionsWrapper;
