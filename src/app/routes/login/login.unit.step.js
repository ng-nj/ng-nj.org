// This addStepDefinitions() function is why the step definitions must
// be configured to load after the adapter.
addStepDefinitions(function (scenario) {
  // Provide a custom World constructor. It's optional, a default one is supplied.
  scenario.World = function (callback) {
    callback();
  };


  // Define your World, here is where you can add some custom utlity functions you
  // want to use with your Cucumber step definitions, this is usually moved out
  // to its own file that you include in your Karma config
  var proto = scenario.World.prototype;
  proto.appSpecificUtilityFunction = function someHelperFunc() {
    // do some common stuff with your app
  };


  // Before scenario hoooks
  scenario.Before(function (callback) {
    // Use a custom utility function
    this.appSpecificUtilityFunction();

    callback();
  });


  scenario.Given(/^gg$/, function(callback) {
    // Verify or set up an app state

    // Move to next step
    callback();
  });

  scenario.When(/^mm$/, function(callback) {
    // Trigger some user action

    // Move to next step
    callback();
  });

  scenario.Then(/^pp$/, function(callback) {
    // Verify the expected outcome

    // Move to next step
    callback();
  });

  // After scenario hooks
  scenario.After(function (callback) {
    callback();
  });
});
