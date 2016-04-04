(function() {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('EventsController',function ($log, $firebaseObject, EventFactory) {
      var self = this;
      self.upcomingEvents = [];

      getUpcomingEvents();

      function getUpcomingEvents () {

        $log.log("getting events");

        var ref = new Firebase("https://ng-nj.firebaseio.com/");
        // download the data into a local object
        self.pulledEvents = $firebaseObject(ref.child('events'));
        //self.upcomingEvents = $firebaseObject(ref.child('events'));

        self.pulledEvents.$loaded().then(function(data) {
          angular.forEach(self.pulledEvents, function(value, key) {

            var event = new EventFactory();
            $log.log("locationName: " + value.locationName);
            event.title = key;
            event.date = value.date;
            event.startTime = value.startTime;
            event.endTime = value.endTime;
            event.locationName = value.locationName;
            event.location = value.location;
            event.locationDetails = value.cost;
            event.cost = value.cost;
            event.eventLink = value.eventLink;
            event.hoster = value.hoster;


            self.upcomingEvents.push(event);

            //if (typeof value.tags.javascript != 'undefined') {
            //  value.tags.javascript = 'hey, e!!!';
              //
              //self.pulledEvents.$save().then(function(ref) {
              //  $log.log("saved!")
              //
              //});
            //}


            //angular.forEach(value.tags, function(value2, key2) {
            //  $log.log("--- key: " + key2 + ", value: " + value2);
            //
            //  //key2 = "booga!";
            //  value2="hi!";
            //  self.pulledEvents.$save().then(function(ref) {
            //      $log.log("saved --!")
            //    });

              //if (value2 == 'hackathon') {
              //  value2 = 'shit!';
              //
              //  self.pulledEvents.stuffing = 'fuck';
              //
              //  self.pulledEvents.update({stuff:"hello"});
              //
              //  $log.log("value: " + value.tags);
              //
              //  //$log.log("value is : " +
              //    //self.pulledEvents.key.tags);
              //  //self.pulledEvents.$save().then(function(ref) {
              //  //  $log.log("saved!")
              //  //});
              //}
            //})


          })


        });

        $log.log("data is : " + self.pulledEvents);

        var hackathons = self.pulledEvents['hackathons'];
        $log.log("hackathon is : " + hackathons);
        $log.log("data is : " + self.pulledEvents.$value);

        var hackathons = self.pulledEvents.events;
        $log.log("hack: " + hackathons);




        <!-- Use ngResource here to pull current events info -->


      }



    })
})();
