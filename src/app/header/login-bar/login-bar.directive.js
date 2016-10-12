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

         return AuthenticationService.login(self.loginUser)
          .then(function (data) {

            console.log('%% user logged in: ' + data);
            console.log('user logged in: ' + data.firstName);
            console.log('user logged in: ' + data.lastName);
            console.log('user logged in: ' + data.favoriteLanguage);


            // self.feedbackMessage = '';

            self.userLoggedIn = true;
            self.authenticatedUser = data;
            self.feedbackMessage = '';

            $scope.$apply();

            self.loginUser.email = '';
            self.loginUser.password = '';


          }, function (error) {
            $log.log("promise rejected!" + error);
            self.feedbackMessage = error;
            $scope.$apply();
          });

        $log.log("feedbackMessage is :" + self.feedbackMessage);

      }

      self.logoutClicked = function() {
        console.log('trying to logout');

        AuthenticationService.logout().then(function () {

          console.log("We'd and been logged out, son!");
          self.userLoggedIn = false;
          $scope.$apply();
        })
      }

    }
  }

})();
