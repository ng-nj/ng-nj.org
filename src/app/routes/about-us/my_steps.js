var myStepDefinitionsWrapper = function () {


  this.Given(/^that I am a person$/, function (callback) {
    callback.pending();
  });
  

  this.When(/^I do stuff$/, function (callback) {
    callback.pending();
  });


  this.Then(/^I have some other stuff$/, function (callback) {
       callback.pending();
       });
};
module.exports = myStepDefinitionsWrapper;
