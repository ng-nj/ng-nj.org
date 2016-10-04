

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var myStepDefinitionsWrapper = function () {


  'use strict';
  var page;

  console.log('Ooga Booga!');

  this.Given(/^I land on the home page$/, function (callback) {

      console.log('Running Given.')
    browser.get('http://localhost:3004/#/');
    page = require('./footer.po.js');

    // var whoops = ;
    // console.log('whoops ' + whoops);



    callback();
  });

  this.When(/^The page loads$/, function (callback) {
      console.log('Running When.')
    expect(true).to.equal(false);
    // var gg = "hello";
    // gg.whoops();

    callback();
  });

  this.Then(/^the footer should contain the text, (.*)$/, function (myText, callback) {
    //
    // expect(myText).to.equal("Copyright 2016 WoJ");
    //
    //
    // (2 + 2).should.equal(4);
    // (myText).should.equal('Copyright 2016 WoJ');





    page.textContainer.getText().then(function(value) {
      // expect(value).to.eventually.equal('hello there, sir');

      // console.log('$$$$$$$$$$$ ' + value)


      console.log('Running Then.')
    });


    // expect().to.eventually.equal(myText);

    // expect(page.textContainer.getAttribute('value')).to.eventually.equal(myText);

      // .and.notify(callback);


    callback();
  });

};
module.exports = myStepDefinitionsWrapper;
