(function () {
  'use strict';

  angular
  .module('app', [
      /* Shared modules */
      'ionic',
      'app.core',
      'app.home',

      /* Feature areas */
      'app.init',
      'app.services'
  ]);
})();
