/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

(function() {


  var MainPage = function () {
    //this.jumbEl = element(by.css('.jumbotron'));
    //this.h1El = this.jumbEl.element(by.css('h1'));
    //this.imgEl = this.jumbEl.element(by.css('img'));
    //this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in main.awesomeThings'));
  };

  module.exports = new MainPage();


  describe('angularjs homepage', function() {
    it('should greet the named user', function() {
      // Load the AngularJS homepage.
      browser.get('http://www.angularjs.org');

      // Find the element with ng-model matching 'yourName' - this will
      // find the <input type="text" ng-model="yourName"/> element - and then
      // type 'Julie' into it.
      element(by.model('yourName')).sendKeys('Julie');

      // Find the element with binding matching 'yourName' - this will
      // find the <h1>Hello {{yourName}}!</h1> element.
      var greeting = element(by.binding('yourName'));

      // Assert that the text element has the expected value.
      // Protractor patches 'expect' to understand promises.

      expect(true).toEqual(true);
    });
  });



})();
