;(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('AboutUsController', function ($log, AboutMembersRetriever, $firebaseObject, $stateParams, $scope, $timeout) {
      var self = this;


      var auth = firebase.auth();

      auth.onAuthStateChanged(function(user) {
        if (user) {
          // User signed in!
          self.profileDisplay.authenticatedUid = user.uid;
          console.log('about us knows the login.')
          var uid = user.uid;
        } else {
          // User logged out
        }
      });


      self.profileDisplay = {};
      self.title = 'Members List';
      // var ref = new Firebase("https://ng-nj.firebaseio.com/");

      self.memberlistsList = firebase.database().ref('users');


      self.memberlistsList.on('value', function (data) {



        // member

        self.pulledEvents = data;

        $timeout(function() {
        self.membersList = data.val();

        }, 0);
        self.otherList = [];




        data.forEach(function(member) {
          $log.log("member: " + member.val().firstName + " " + member.key)


            $log.log('$stateParam(0] ' + JSON.stringify($stateParams['userId']));

              self.otherList.push(member);


            if (member.key === $stateParams['userId']) {
              $log.log('ok!');

              // self.allTheThings
              self.currentUserSelected = member.val();

              self.profileDisplay.firstName = member.val().firstName;
              self.profileDisplay.lastName = member.val().lastName;
              self.profileDisplay.currentLocation = member.val().currentLocation
              self.profileDisplay.blurb = member.val().blurb;
              self.profileDisplay.favoriteLanguage = member.val().favoriteLanguage;
              self.profileDisplay.accountType = member.val().accountType;
              // self.profileDisplay.authenticatedUid = $stateParams['userId'];
              self.profileDisplay.currentDisplayedUid = member.key;

            }

        });


        // $scope.$apply();

          // angular.forEach(self.membersList, function (value, key) {
        //   $log.log("member: " + value.firstName + " " + key)
        //
        //
        //   $log.log('$stateParam(0] ' + JSON.stringify($stateParams['userId']));
        //
        //   if (key === $stateParams['userId']) {
        //     $log.log('ok!');
        //
        //     // self.allTheThings
        //     self.currentUserSelected = value;
        //
        //     self.currentFirstName = value.firstName;
        //     self.lastName = value.lastName;
        //     self.firstName = value.firstName;
        //     self.spiritAnimal = value.spiritAnimal;
        //     self.favoriteFood = value.favoriteFood;
        //
        //
        //   }
        //
        // });

        // $log.log('thing: ' + )

      }, function(error) {
        console.log('there was a database error: ' + error);
      })


      self.profileEditBtnClicked = function () {
        // TODO - Change DB values to text inputs and then persit to DB on submit.




        
      }


      self.followUserClicked = function (profileDisplay) {
        // TODO - Make some sort of functionality for following each other.



      }


    })
})();
