;(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .directive('loginBar', loginBar);

  /** @ngInject */
  function loginBar() {
    var directive = {
      restrict: '',
      templateUrl: 'app/header/login-bar/login-bar.template.html',
      scope: {},
      controller: LoginBarController,
      controllerAs: 'self',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LoginBarController(AuthenticationService, $log, $scope) {
    // function LoginBarController($log) {
      var self = this;
      self.loginUser = '';
      self.feedbackMessage = '';
      self.authenticatedUser = "";
      self.userLoggedIn = false;

      self.login = function () {


            console.log('%% user logging...');

        self.feedbackMessage = AuthenticationService.login(self.loginUser)
          .then(function (data) {

            console.log('%% user logged in: ' + data);
            console.log('user logged in: ' + data.firstName);
            console.log('user logged in: ' + data.lastName);
            console.log('user logged in: ' + data.favoriteLanguage);


            self.userLoggedIn = true;
            self.authenticatedUser = data;

            $scope.$apply();

          }, function (error) {
            $log.log("promise rejected!" + error);
            self.feedbackMessage = error;
          });

        $log.log("feedbackMessage is :" + self.feedbackMessage);

      }

    }
  }

})();
