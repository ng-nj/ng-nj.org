(function() {
  'use strict';




  angular
    .module('ngNjOrg')
    .config(config);



  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    var config = {
      apiKey: "AIzaSyAWJp_C_eqNpQaPZsmKxIYzUOg5QgkNTTM",
      authDomain: "ng-nj.firebaseapp.com",
      databaseURL: "https://ng-nj.firebaseio.com",
      storageBucket: "project-537738856427405277.appspot.com",
      messagingSenderId: "964546155082"
    };

    firebase.initializeApp(config);

    console.log('firebase var is: ' + firebase.storage().ref());

  }

})();
