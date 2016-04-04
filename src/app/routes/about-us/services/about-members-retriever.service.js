/**
 * Created by bobolicious3000 on 3/31/16.
 */
(function() {
  'use strict';

  angular
    .module('ngNjOrg')
    .service('AboutMembersRetriever',function ($log, $firebaseArray, $q) {
      var self = this;
      self.members = [];

      $log.log("Started AboutMembersRetriever");

      self.getMembers = function() {
        //var ref = new Firebase("https://ng-nj.firebaseio.com/users");
        // download the data into a local object
        //self.pulledEvents = $firebaseArray(ref.child('events'));


        var defered = $q.defer();


        var ref = new Firebase("https://ng-nj.firebaseio.com/users");
        // download the data into a local object
        //= $firebaseArray(ref.child('events'));

        self.pulledEvents = $firebaseArray(ref)
        self.pulledEvents.$loaded().then(function(data) {
          $log.log("in loaded " + JSON.stringify(data));

          self.pulledEvents = data;
          self.membersList = data;

          defered.resolve(data);
        });


        return defered.promise;
        //  $log.log("in loaded " + data);
        //  defered.resolve(data)
        //  $log.log("record: " + self.pulledEvents.$id)
        //
        //  angular.forEach(self.pulledEvents, function(value, key) {
        //    $log.log("key: " + key + ", value: " + value.date);
        //
        //    $log.log(" tags " + value.tags);
        //  })
        //
            //if (typeof value.tags.javascript != 'undefined') {
            //  value.tags.javascript = 'hey, e!!!';
            //
            //  self.pulledEvents.$save().then(function (ref) {
            //    $log.log("saved!")
            //
            //  });
            //}


          //

        //
        //})
      }
    })


})();
