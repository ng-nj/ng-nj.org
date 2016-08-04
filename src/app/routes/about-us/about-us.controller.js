;(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('AboutUsController', function ($log, AboutMembersRetriever, $firebaseObject, $stateParams) {
      var self = this;

      self.title = 'Members List';
      var ref = new Firebase("https://ng-nj.firebaseio.com/");

      self.memberlistsList = $firebaseObject(ref.child('users'))
      self.memberlistsList.$loaded().then(function (data) {

        self.pulledEvents = data;
        self.membersList = data;

        angular.forEach(self.membersList, function (value, key) {
          $log.log("member: " + value.firstName + " " + key)


          $log.log('$stateParam(0] ' + JSON.stringify($stateParams['userId']));

          if (key === $stateParams['userId']) {
            $log.log('ok!');

            // self.allTheThings
            self.currentUserSelected = value;

            self.currentFirstName = value.firstName;
            self.lastName = value.lastName;
            self.firstName = value.firstName;
            self.spiritAnimal = value.spiritAnimal;
            self.favoriteFood = value.favoriteFood;


          }

        })

        // $log.log('thing: ' + )

      })

    })
})();
