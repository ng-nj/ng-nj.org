
(function() {

  angular
    .module('ngNjOrg')
    .controller('RegisterController', function ($log, Authentication) {
      var self = this;

      self.validFirstName = false
      self.fauxCount = 0;

      self.login = function () {
        Authentication.login(self.user)
      }
      self.logout = function () {
        Authentication.logout()
      }
      self.register = function () {

        $log.log("Registering new user!");
        $log.log('files are: ' + JSON.stringify(self.filesSelected));
        Authentication.register(self.user)
      };




    self.booyah = function () {

      self.fauxCount = 1;

    };


    });


})();
