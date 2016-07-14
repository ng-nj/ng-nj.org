var chai = require('chai');
var expect = chai.expect;


var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

'use strict';
var page;

var myStepDefinitionsWrapper = function () {


  this.Given(/^I land on the home page$/, function (callback) {

    browser.get('/index.html');
    page = require('./footer.steps-po.js');

    callback();
  });

  this.When(/^The page loads$/, function (callback) {
    callback();
  });

  this.Then(/^the footer should contain the text, (.*)$/, function (myText, callback) {

    // expect(myText).to.be("Copyright 2016 WoJ");

    expect(page.textContainer.getAttribute('value')).to.eventually.equal(myText);



    callback();
  });

};
module.exports = myStepDefinitionsWrapper;
