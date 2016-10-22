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
        }
    }
})();
