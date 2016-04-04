/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('ngNjOrg')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
  .constant('FIREBASE_URL', 'https://ng-nj.firebaseio.com/')

})();
