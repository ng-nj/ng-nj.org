
(function() {

  angular
    .module('ngNjOrg')
    .service('AuthenticationService',
    function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL, $log, $state, $q) {

    //   var self = this;
    //
    //   self.ref = new Firebase(FIREBASE_URL);
    //   self.auth = $firebaseAuth(self.ref);
    //   self.loggedInObject = {
    //     isLoggedIn: false,
    //     currentUserObject: ""
    //   };
    //
    //   self.login = function(user) {
    //
    //
    //
    //     return self.auth.$authWithPassword({
    //       email: user.email,
    //       password: user.password
    //     }).then(function(registeredUser){
    //
    //       $log.log("logged in!");
    //       $location.path('/home');
    //       self.loggedInObject.isLoggedIn = true;
    //       self.loggedInObject.currentUserObject = registeredUser;
    //
    //       var childString = "users/" + registeredUser.uid;
    //
    //       $log.log("getting object for: " + childString);
    //
    //       self.newref = new Firebase(FIREBASE_URL)
    //       var firebaseUserObj = $firebaseObject(self.newref.child(childString))
    //         return firebaseUserObj.$loaded().then(function(data) {
    //           $log.log("got firebase obj data: " + data.email);
    //           $log.log("data like firstName: " + data.firstName);
    //           return data;
    //         }, function(error) {
    //
    //         })
    //
    //
    //     })
    //       .catch(function(error) {
    //
    //         console.log("Firebase auth Error: " + error);
    //         var errorString = "" + error;
    //         $log.log("error string: " + errorString.code);
    //
    //         $log.log("error is :" + JSON.stringify(error));
    //
    //         return $q.reject(error);
    //       });
    //
    //
    //   };
    //
    //   // self.logout = function() {
    //   //   self.loggedInObject.isLoggedIn = false;
    //   //   self.loggedInObject.currentUserObject = "";
    //   //   $location.path('/home');
    //   //   // return self.auth.$unauth();
    //   //
    //   //   // return false;
    //   // }
     })


})();
