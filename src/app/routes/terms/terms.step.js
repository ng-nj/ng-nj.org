var myStepDefinitionsWrapper = function () {

  this.Given(/^that I am a Gperson$/, function (callback) {
       callback();
       });

  this.When(/^I do Gstuff$/, function (callback) {
    callback();
  });

  this.Then(/^I have some Gother stuff$/, function (callback) {
    callback();
  });


};
module.exports = myStepDefinitionsWrapper;
