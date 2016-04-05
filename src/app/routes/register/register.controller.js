
(function() {

  angular
    .module('ngNjOrg')
    .controller('RegisterController', function ($log, Authentication) {
      var self = this;

      self.login = function () {
        Authentication.login(self.user)
      }
      self.logout = function () {
        Authentication.logout()
      }
      self.register = function () {

        $log.log("Registering new user!");
        Authentication.register(self.user)
      };

    });


})();
