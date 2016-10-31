;(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('AboutUsController', function ($log, AboutMembersRetriever, $firebaseObject, $stateParams, $scope, $timeout) {
      var self = this;

      self.cheese = 'derp';

      console.log('hello');

      self.auth = firebase.auth();

      if (firebase.auth().currentUser != null) {

      self.profileEditMode = firebase.auth().currentUser.uid == $stateParams['userId'];
      }

      // self.profileImgSrc = "gs://project-537738856427405277.appspot.com/profile-img/eAxrHe1da3aQbehvhKSxbC1Texi2/dfep";
      //project-537738856427405277.appspot.com/profile-img/eAxrHe1da3aQbehvhKSxbC1Texi2/dfep
      console.log('trying to set the img source: ' + self.profileImgSrc);

      // self.profileImgSrc = '"https://console.firebase.google.com/project/project-537738856427405277/storage/files/profile-img/" + vm.profileDisplay.currentDisplayedUid '

      self.auth.onAuthStateChanged(function (user) {
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


        storageRef.getDownloadURL().then(function (url) {
          console.log('@#trying got utl! ' + url);
          self.profileImgSrc = url;

          $scope.$apply();
        }).catch(function (error) {
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

        $timeout(function () {
          self.membersList = data.val();

        }, 0);
        self.otherList = [];


        data.forEach(function (member) {
          $log.log("member: " + member.val().firstName + " " + member.key)


          $log.log('$stateParam(0] ' + JSON.stringify($stateParams['userId']));

          self.otherList.push(member);


          if (member.key === $stateParams['userId']) {
            $log.log('ok!');

            // self.allTheThings
            self.currentUserSelected = member.val();

            self.profileDisplay = member.val();

            self.profileDisplay.uid = member.key;
            self.profileDisplay.isFollowedByCurrentLoggedInUser = false;
            // self.profileDisplay.firstName = member.val().firstName;
            // self.profileDisplay.lastName = member.val().lastName;
            // self.profileDisplay.currentLocation = member.val().currentLocation
            // self.profileDisplay.blurb = member.val().blurb;
            // self.profileDisplay.favoriteLanguage = member.val().favoriteLanguage;
            // self.profileDisplay.accountType = member.val().accountType;
            // // self.profileDisplay.authenticatedUid = $stateParams['userId'];
            // self.profileDisplay.currentDisplayedUid = member.key;

          }

        });




      }, function (error) {
        console.log('there was a database error: ' + error);
      })




      if (firebase.auth().currentUser != null) {


        self.profileDisplay.isFollowedByCurrentLoggedInUser = false;

        var followCheckRef =
          firebase.database().ref('users/' + firebase.auth().currentUser.uid
            + '/following/' + $stateParams['userId']);

        followCheckRef.on('value', function (snapshot) {
          console.log('got snapshot!' + snapshot.val());

          if (snapshot.val() != null) {
            self.profileDisplay.isFollowedByCurrentLoggedInUser = true;
            console.log('not null')

          } else {
            self.profileDisplay.isFollowedByCurrentLoggedInUser = false
            console.log('is null')

          }

        });

      }



      self.profileEditBtnClicked = function () {
        // TODO - Change DB values to text inputs and then persit to DB on submit.

        self.profileEditMode = !self.profileEditMode;
        console.log('editing profile: ' + self.profileEditMode);

      }


      self.editProfileSubmitBtnClicked = function() {


        self.profileEditMode = false;

        // Update the user's object in the database to the values that he entered.
        var updateProfileRef = firebase.database().ref('/users/' + firebase.auth().currentUser.uid);



        var updateObj = {firstName: self.editProfile.firstName};


        updateProfileRef.update(updateObj).then(function() {
          console.log('got a snapshot');
          console.log('got a snapshot key');
        }, function() {
          console.log('editing profile save failed!')
        });


        console.log('editing profile submit: ' + self.profileEditMode);

      };

      self.editProfileCancelBtnClicked = function() {

        //TODO clear all edit profile inputs
        self.profileEditMode = false;

        console.log('edit profile cancelled: ' + self.profileEditMode);
      };


      self.unfollowUserClicked = function (profileDisplay) {

        var profileUserRef = firebase.database().ref('/users/' + profileDisplay.uid + '/followers/' + firebase.auth().currentUser.uid);
        profileUserRef.remove(function (error) {
          console.log('removed me from his followers list, error: ' + error);
          self.isFollowedByCurrentLoggedInUser = false;
        });

        var profileUserRef2 = firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/following/' + profileDisplay.uid);
        profileUserRef2.remove(function (error) {
          console.log('removed him from my followed list, error: ' + error);
          self.isFollowedByCurrentLoggedInUser = false;
        });

      };

      self.followUserClicked = function (profileDisplay) {
        // TODO - Make some sort of functionality for following each other.

        // firebase.auth().reload().then(function(user) {
        //   console.log('user reauthenticated');
        // }, function (error) {
        //   console.log('error reauthenticating: ' + error);
        // })


        console.log(JSON.stringify(self.auth.currentUser));
        console.log(JSON.stringify(self.auth.currentUser.uid));
        // console.log('hmm '+ JSON.stringify(self.auth.apiKey));

        console.log(self.auth.currentUser['uid'] + 'about trying to follow ' + profileDisplay.uid)

        var obj = {};
        obj[profileDisplay.uid] = 1;


        // Update the "Following" property on the current user.
        var authenticatedUserRef = firebase.database().ref('/users/' + self.auth.currentUser.uid + '/following/');
        authenticatedUserRef.update(obj, function (error) {
          console.log('ok ' + error);

          if (error == null) {
            self.profileDisplay.isFollowedByCurrentLoggedInUser = true;

            $scope.$apply();
            console.log('I\'m here : ' + self.profileDisplay.isFollowedByCurrentLoggedInUser);
          }
        });


        var obj2 = {};
        obj2[self.auth.currentUser.uid] = 1;

        // Update the "Followers" property on the user being followed.
        var profileUserRef = firebase.database().ref('/users/' + profileDisplay.uid + '/followers/');
        profileUserRef.update(obj2, function (error) {
          console.log('ok2 ' + error);
        });


      }


    })
})();
