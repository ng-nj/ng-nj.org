(function() {
  'use strict';

  angular
    .module('ngNjOrg')
    .directive('loginBar', loginBar);

  /** @ngInject */
  function loginBar() {
    var directive = {
      restrict: '',
      templateUrl: 'app/header/login-bar/login-bar.html',
      scope: {

      },
      controller: LoginBarController,
      controllerAs: 'self',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LoginBarController(moment, AuthenticationService, $log) {
      var self = this;
      self.loginUser = "";
      self.feedbackMessage = "Hey Man!";
      self.authenticatedUser = "";
      self.userLoggedIn = false;

      self.login = function() {

        self.feedbackMessage = AuthenticationService.login(self.loginUser)
          .then(function(data) {
            // promise fulfilled

            //$log.log("promise fulfilled!" + JSON.stringify(data));

            self.userLoggedIn = true;
            self.authenticatedUser = data;
            //if (data.forecast==='good') {
            //  //prepareFishingTrip();
            //} else {
            //  //prepareSundayRoastDinner();
            //}
          }, function(error) {
            $log.log("promise rejected!" + error);
            // promise rejected, could log the error with: console.log('error', error);
            //prepareSundayRoastDinner();
            self.feedbackMessage = error;
          });

        $log.log("feedbackMessage is :" + JSON.stringify(self.feedbackMessage));
        $log.log("feedbackMessage is :" + self.feedbackMessage);

      }

      // "vm.creation" is avaible by directive option "bindToController: true"
      //self.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
