
(function() {

  angular
    .module('ngNjOrg')
    .controller('RegisterController', function ($log, Authentication) {
      var self = this;


      self.fauxCount = 0;
      self.pw;

      self.login = function () {
        Authentication.login(self.user)
      }
      self.logout = function () {
        Authentication.logout()
      }
      self.register = function () {

        $log.log("Registering new user!");
        Authentication.register(self.user, self.pw)
      };


    self.booyah = function () {

      self.fauxCount = 1;

    };


    });


})();
