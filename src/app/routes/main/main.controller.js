(function() {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $log) {
    var vm = this;

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
