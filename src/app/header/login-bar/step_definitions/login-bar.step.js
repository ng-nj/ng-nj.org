

var myStepDefinitionsWrapper = function () {

  var chai = require('chai');
  var expect = chai.expect;
  var should = chai.should();

  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);

  var page;

  console.log('Ooga Booga!');

  this.Given(/^that I am a person not logged in$/, function (callback) {

    browser.get('http://localhost:3000/#/');

    // browser.get('localhost:3000/#/events');
    // page = require('./login-bar.po.js');

    callback();
  });

  this.When(/^enter successful credentials$/, function (callback) {

    // console.log('$$$$$$$$$ passwordField: ' + page.passwordField.getText())
    page = require('./login-bar.po');
    // page.usernameField.sendKeys('hi');

    // page.passwordField.setValue("yoyoyoyo");


    element(by.css('.a')).sendKeys('hello');


    browser.pause();

    // expect(page.usernameField.getText()).to.eventually.equal("Copyright 2016 WoJ");

    callback();
  });

  this.Then(/^Login bar should show a success message$/, function (callback) {

    // expect(myText).to.equal("Copyright 2016 WoJ");
    //
    //
    // (2 + 2).should.equal(4);
    // (myText).should.equal('Copyright 2016 WoJ');
    //


    // .and.notify(callback);

    // expect(page.textContainer.getText()).should.eventually.equal('yo yo');





    callback();
  });

};
module.exports = myStepDefinitionsWrapper;
