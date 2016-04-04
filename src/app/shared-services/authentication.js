
(function() {

  angular
    .module('ngNjOrg')
  .factory('Authentication',
  function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL, $log, $state) {


    var ref = new Firebase(FIREBASE_URL)
    var auth = $firebaseAuth(ref);

    auth.$onAuth(function(authUser) {
      // user has been authenticated.
      if(authUser) {
        var userRef = new Firebase(FIREBASE_URL + "users/" + authUser.uid);
        var userObj = $firebaseObject(userRef);
      }
    })





    var favoriteFoods = [
      'Burgers',
      'Pizza',
      'Steak & Potatoes',
      'Macaroni & Cheese',
      'Chicken Salad'
    ];
    var favoriteVacationDestinations = [
      'San Francisco, CA',
      'Paris France',
      'Swiss Alps',
      'Orlando, Florida',
      'Waimanalo Beach, Hawaii',
      'Sydney, Australia',
      'Kamalame Cay, The Bahamas',
      'Playa del Carmen, Mexico',
      'Peter Island, British Virgin Islands',
      'Costa Alegre, Mexico',
      'Gold Coast, Barbados'
    ]
    var numbersOfKidsAmounts = [
      '3',
      '4',
      '5',
      '9',
      '14!'
    ]
    var futureCauseOfDeaths = [
      'Drowning.',
      'Being struck by lightening.',
      'Cancer caused by your cell phone.',
      'A brain tumor.',
      'You will be eaten by a zombie.',
      'A Food-borne illness',
      'You will be trapped inside of a derailed roller coaster cart',
      'You will be hit by a bullet accidentally shot at you.',
    ]
    var biggestFears = [
      'Speaking in front of a large crowd',
      'Getting fired.',
      'Psycho killers.',
      'Not reaching your full potential',
      'Note having enough money',
      'Never finding your true love.',
      'Being sad and alone.',
      'Dieing.',
      'Being a mediocre programmer your whole life.'
    ];
    var skillsNeedToWorkOn = [
      'Try to be more in touch with your feelings.',
      'Be more considerate of others.',
      'Hit the gym more often.',
      'Try to cook something new.',
      'Be less selfish.',
      'Read more books.',
      'Spend more time with your family.',
      'Give yourself some time to relax.'

    ]
    var spiritAnimals = ['Zebroid', 'Liger', 'Dzo', 'Unicorn',
      'Guinea Bear', 'Frogodile', 'Squirrelnocerous']


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

        // $rootScope.message = "Welcome " + $rootScope.user.email

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


          var regRef = new Firebase(FIREBASE_URL + 'users')
            .child(registeredUser.uid).set({
              // date: Firebase.ServerValue.TIMESTAMP.toDateString(),
              date: new Date().toString(),
              userId: registeredUser.uid,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              favoriteFood: favoriteFoods[
                Math.floor(Math.random() * favoriteFoods.length)
                ],
              vacationSpot: favoriteVacationDestinations[
                Math.floor(Math.random() * favoriteVacationDestinations.length)
                ],
              numberOfKids: numbersOfKidsAmounts[
                Math.floor(Math.random() * numbersOfKidsAmounts.length)
                ],
              biggestFear: biggestFears[
                Math.floor(Math.random() * biggestFears.length)
                ],
              causeOfDeath: futureCauseOfDeaths[
                Math.floor(Math.random() * futureCauseOfDeaths.length)
                ],
              skillToWorkOn: skillsNeedToWorkOn [
                Math.floor(Math.random() * favoriteFoods.length)
                ],
              spiritAnimal: spiritAnimals [
                Math.floor(Math.random() * spiritAnimals.length)
                ]

            })




        }).catch(function(error){
          $rootScope.message = "Uh oh! And error occurred: " + error.message;

         $state.go("home");
        })
      }
    }

  })


})()
