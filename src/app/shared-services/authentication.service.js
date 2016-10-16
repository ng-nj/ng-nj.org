
(function() {

  angular
    .module('ngNjOrg')
    .service('AuthenticationService',
    function($rootScope, $firebaseAuth, $q, $firebaseObject, $location, FIREBASE_URL, $log, $state, $q) {

      var self = this;

      // self.ref = new Firebase(FIREBASE_URL);
      self.auth = firebase.auth();
      self.loggedInObject = {
        isLoggedIn: false,
        currentUserObject: ""
      };

      self.login = function(user) {



        return self.auth.signInWithEmailAndPassword(
          user.email,
          user.password
        ).then(function(registeredUser){

          $log.log("logged in!" + registeredUser);
          $log.log("logged in!" + JSON.stringify(registeredUser));
          // $location.path('/home');
          self.loggedInObject.isLoggedIn = true;
          self.loggedInObject.currentUserObject = registeredUser;

          var childString = "users/" + registeredUser.uid;

          $log.log("getting object for: " + childString);


          var prom = $q.defer();


          // Loading the User's data that just logged in.
          var firebaseUserObj = firebase.database().ref(childString);


            firebaseUserObj.on('value', function(data) {
              $log.log("data like " + data.key + ": " + data.val().firstName);


              $log.log('And ' + data.val().favoriteLanguage)
              return prom.resolve(data.val());
            }, function(error) {
              console.log('There was a database error: ' + error);
            })

          return prom.promise;

          // console.log('returning user! ' + registeredUser);
          // return registeredUser;

        },function(error) {

            console.log("Firebase auth Error: " + error);
            var errorString = "" + error;
            $log.log("error string: " + errorString.code);

            $log.log("error is :" + JSON.stringify(error));

            return $q.reject(error);
          }
        );

      };

      self.logout = function() {

        return self.auth.signOut().then(function() {
        self.loggedInObject.isLoggedIn = false;
          self.loggedInObject.currentUserObject = "";
          // $location.path('/home');

          return;
        })
        // return self.auth.$unauth();

        // return false;
      }
     })


})();
