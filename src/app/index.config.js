(function() {
  'use strict';

  angular
    .module('ngNjOrg')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
