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
            var self = this;
            self.loginUser = '';
            self.feedbackMessage = '';
            self.authenticatedUser = "";
            self.userLoggedIn = false;

            self.login = function () {
                return AuthenticationService.login(self.loginUser).then(function (data) {
                    self.userLoggedIn = true;
                    self.authenticatedUser = data;
                    self.feedbackMessage = '';
                    self.loginUser.email = '';
                    self.loginUser.password = '';
                    $scope.$apply();
                }, function (error) {
                    self.feedbackMessage = error;
                    $scope.$apply();
                });
            }

            self.logoutClicked = function() {
                AuthenticationService.logout().then(function () {
                    self.userLoggedIn = false;
                    $scope.$apply();
                })
            }

            self.back_to_login = function() {
                self.feedbackMessage = "";
                self.loginUser.email = "";
                self.loginUser.password = "";
            }

            self.googleSignInClicked = function () {
              console.log('google sign in was clicked!');

              var provider = new firebase.auth.GoogleAuthProvider();
              console.log('provider is ' + provider);

              firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;

                console.log('signed in: ' + token + ' ' + JSON.stringify(user));

              }).catch(function(error) {

                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log('error: ' + errorCode + ' ' + errorMessage +
                ' ' + email + ' ' + credential);
              });
            }
        }
    }
})();
