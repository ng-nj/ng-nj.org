;(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .filter('bannedUser', function () {
      return function (inputUsername) {
        var self = this;
        self.nameMatchesBannedUser = false;

        self.bannedUserList = [
          "evilBob", "evilBob's Friend"
        ];

        angular.forEach(bannedUserList, function (bannedUser) {
          if (inputUsername == bannedUser) {
            self.nameMatchesBannedUser = true;
          }

        });

        if (!self.nameMatchesBannedUser) {
          return inputUsername;
        } else {
          return;
        }
      };
    });


})();
