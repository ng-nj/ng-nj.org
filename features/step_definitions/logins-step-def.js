var myStepDefinitionsWrapper = function () {

  this.Given(/^the user iis on the login page$/, function (callback) {
       // callback.pending();

          callback();
       });

  this.When(/^I do somehitng$/, function (callback) {
      callback();
      });

  this.Given(/^cha cha cha$/, function (callback) {
      callback();
      });

  this.Then(/^I should have something else$/, function (callback) {
      callback();
      });
};
module.exports = myStepDefinitionsWrapper;
