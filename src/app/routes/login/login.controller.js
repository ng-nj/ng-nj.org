(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .controller('EventsController', function ($log) {
      var self = this;

      self.upcomingEvents = [{
        "eventName": "myEvent",
        "date": "June 6th, 2016",
        "location": "12 Derp St, New Brunswick, NJ 08901",
        "description": "come do stuff with us!"
      }];

      getUpcomingEvents();

      function getUpcomingEvents() {

      }


    })
})();
