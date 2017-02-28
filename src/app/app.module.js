(function () {
  'use strict';

  angular
  .module('app', [
      /* Shared modules */
      'ionic',
      'app.core',

      /* Feature areas */
      'app.login',
      'app.home',
      'app.services',
      'nf.localization',
      'ionic-modal-select',

      /*3rd party*/
      'toastr'
  ]);
})();
