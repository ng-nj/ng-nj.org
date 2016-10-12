;(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('AboutUsController', function ($log, AboutMembersRetriever, $firebaseObject, $stateParams, $scope, $timeout) {
      var self = this;


      var auth = firebase.auth();
      // self.profileImgSrc = "gs://project-537738856427405277.appspot.com/profile-img/eAxrHe1da3aQbehvhKSxbC1Texi2/dfep";
      //project-537738856427405277.appspot.com/profile-img/eAxrHe1da3aQbehvhKSxbC1Texi2/dfep
      console.log('trying to set the img source: ' + self.profileImgSrc);

      // self.profileImgSrc = '"https://console.firebase.google.com/project/project-537738856427405277/storage/files/profile-img/" + vm.profileDisplay.currentDisplayedUid '

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

      $timeout(function () {
        console.log('@#trying to get image!');

        var refString = '/profile-img/' + $stateParams['userId'] + '/profileImg';

        console.log('@#ref string is' + refString);


        var storageRef = firebase.storage().ref(refString);


        storageRef.getDownloadURL().then(function(url) {
          console.log('@#trying got utl! ' + url);
          self.profileImgSrc = url;

          $scope.$apply();
        }).catch(function(error) {
          // Handle any errors
          console.log('@#errors getting img url: ' + error);
        });
        // storageRef.once(function(thing) {
        //   console.log('got a thing trying: ' + thing);
        // })


      }, 0);


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
