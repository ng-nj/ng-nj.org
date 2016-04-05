;(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .filter('checkmark', function () {
      return function (inputUsername) {
        var self = this;
        self.nameMatchesBannedUser = false;

        self.bannedUserList = [
          "evilBob", "evilBob's Friend"
        ];

        angular.forEach(bannedUserList, function (bannedUser) {
          if (inputUsername == bannedUser) {
            self.nameMatchesBannedUser = false;
          }

        });

        if (self.nameMatchesBannedUser) {
          return inputUsername;
        } else {
          return;
        }
      };
    });


})();
