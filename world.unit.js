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

});
