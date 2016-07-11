var myStepDefinitionsWrapper = function () {

  this.Then(/^the footer should contain the text, (.*)$/, function (callback) {
       callback.pending();
       });
};
module.exports = myStepDefinitionsWrapper;
