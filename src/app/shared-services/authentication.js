

(function() {

  angular
    .module('ngNjOrg')
  .factory('Authentication',
  function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL, $log, $state, $firebase) {

	  

    var ref = new Firebase(FIREBASE_URL)
    var auth = $firebaseAuth(ref);

    auth.$onAuth(function(authUser) {
      // user has been authenticated.
      if(authUser) {
        var userRef = new Firebase(FIREBASE_URL + "users/" + authUser.uid);
        var userObj = $firebaseObject(userRef);
      }
    })


    auth.$onAuth(function(authUser) {
      if (authUser) {
        var userRef = new Firebase(FIREBASE_URL + 'users/' +
          authUser.uid)
        var userObj = $firebaseObject(userRef)

        $rootScope.currentUser = userObj
        // $rootScope.currentUser.firstname = authUser.firstname
      } else {
        $rootScope.currentUser = false;
      }
    })

    return {
      login: function(user) {

        auth.$authWithPassword({
          email: user.email,
          password: user.password
        }).then(function(registeredUser){

          $location.path('/success');
        })
          .catch(function(error) {
            $rootScope.message = error.message;
            console.log("Firebase auth Error: " + error)
          });


      },

      logout: function() {
        $rootScope.currentUser = false;
        $location.path('/login');
        return auth.$unauth();

      },

      requireAuth: function() {
        return auth.$requireAuth()
      },

      register: function(user) {
        $log.log("user's info: " + user.firstName);


        auth.$createUser({
          email: user.email,
          password: user.password
        }).then(function(registeredUser) {

          console.log("got the registered user! " + registeredUser);
          console.log("got id! " + registeredUser.uid);
          console.log("got the timestamp: " + Firebase.ServerValue.TIMESTAMP.toString());


          $rootScope.message = "Welcome " + user.firstName + ". Thanks for registering!";


          var storageRef = $firebase.storage().ref();

          var userImageRef = storageRef.child(registeredUser.uid + '.jpg');

          var file = document.getElementById("nameImg").files; // use the Blob or File API
          userImageRef.put(file).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
          });

          var regRef = new Firebase(FIREBASE_URL + 'users')
            .child(registeredUser.uid).set({
              // date: Firebase.ServerValue.TIMESTAMP.toDateString(),
              date: new Date().toString(),
              userId: registeredUser.uid,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              accountType: user.accountType,
              profileBlurb: user.profileBlurb,
              imgPath: user.imgPath
            }).then(function() {
              console.log('worked!')
            }, function () {
              console.log('didnt work...');
            })


        });
        //   .catch(function(error){
        //   $rootScope.message = "Uh oh! And error occurred: " + error.message;
        //
        //  $state.go("home");
        // })
      }
    }

  })


})()

