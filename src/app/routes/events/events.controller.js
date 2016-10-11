(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('EventsController', function ($log, $firebaseObject, EventFactory, $scope) {
      var self = this;
      self.upcomingEvents = [];

      getUpcomingEvents();

      function getUpcomingEvents() {

        $log.log("getting events");

        // var ref = new Firebase("https://ng-nj.firebaseio.com/");
        self.pulledEvents = firebase.database().ref('events');

        self.pulledEvents.on('value', function (data) {
            data.forEach(function(dataEvent) {

              console.log("got the timestamp: " + dataEvent.key);
          // angular.forEach(self.pulledEvents, function (value, key) {

            var event = new EventFactory();
            $log.log("locationName: " + dataEvent.val().locationName);
            event.title = dataEvent.key;
            event.date = dataEvent.val().date;
            event.startTime = dataEvent.val().startTime;
            event.endTime = dataEvent.val().endTime;
            event.locationName = dataEvent.val().locationName;
            event.location = dataEvent.val().location;
            event.locationDetails = dataEvent.val().locationDetails;
            event.cost = dataEvent.val().cost;
            event.eventLink = dataEvent.val().eventLink;
            event.hoster = dataEvent.val().hoster;


            self.upcomingEvents.push(event);


              // console.log('another event: ' + self.upcomingEvents);
              // var hackathons = dataEvent.val().hackathons;
              // $log.log("hackathon is : " + hackathons);

              $scope.$apply();

            })

        });


      }


    })
})();
