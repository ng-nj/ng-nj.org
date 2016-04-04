(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('AboutUsController', function ($log, AboutMembersRetriever, $firebaseObject) {
      var self = this;

      self.title = 'Members List';
      var ref = new Firebase("https://ng-nj.firebaseio.com/");

      self.memberlistsList = $firebaseObject(ref.child('users'))
      self.memberlistsList.$loaded().then(function (data) {

        self.pulledEvents = data;
        self.membersList = data;

        angular.forEach(self.membersList, function (value, key) {
          $log.log("member: " + value.firstName + " " + key)
          self.currentUserSelected = value;

        })

      })

    })
})();
