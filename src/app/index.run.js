(function() {
  'use strict';

  angular
    .module('ngNjOrg')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
