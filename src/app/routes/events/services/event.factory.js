/**
 * Created by bobolicious3000 on 4/2/16.
 */
(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .factory('EventFactory', function () {

      function EventFactory() {
        var self = this;

        self.title = "";
        self.date = "";
        self.startTime = "";
        self.endTime = "";
        self.locationName = "";
        self.location = "";
        self.locationDetails = "";
        self.cost = "";
        self.eventLink = "";

        self.something = "";

      }

      EventFactory.prototype.doSomething = function () {
        self.something = "something has been done.";
      };

      return EventFactory;
    })

})();
