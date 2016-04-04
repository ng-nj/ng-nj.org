(function() {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('AboutUsController',function ($log, AboutMembersRetriever, $firebaseObject) {
      var self = this;

      //self.membersList = AboutMembersRetriever.getMembers();

      //$log.log("got the membersList: " + self.membersList);

      self.title = 'Members List';
      var ref = new Firebase("https://ng-nj.firebaseio.com/");
      // download the data into a local object
      //= $firebaseArray(ref.child('events'));

      self.memberlistsList = $firebaseObject(ref.child('users'))
      self.memberlistsList.$loaded().then(function(data) {
        //$log.log("in loaded " + JSON.stringify(data));

        self.pulledEvents = data;
        self.membersList = data;


        angular.forEach(self.membersList, function(value, key) {
         $log.log("member: " + value.firstname + " " + key)

          //.firstName = value.firstname;
        })


      })

      //app.factory('Schedules', function($firebaseArray, Ref) {
      //  return $firebaseArray(Ref.child('Schedules'));
      //});

        //  [
      //  {
      //    name:"Jim",
      //    location:"Egg Harbor Twp, NJ"
      //  },
      //  {
      //    name:"Bob",
      //    location:"Tuna Cassole, WI"
      //  }
      //];


  })
})();
