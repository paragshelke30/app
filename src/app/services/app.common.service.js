(function () {
  'use strict';

  angular
    .module('app.services')
    .factory('commonService', commonService);

  commonService.$inject = [
    '$timeout',
    'toastr',
    '$rootScope'
  ];

  function commonService(
    $timeout,
    toastr,
    $rootScope) {
    var service = {
      timeout: $timeout,
      rootScope: $rootScope,
      toast: toast
    };

    return service;

    function toast(type, objectData) {
      toastr[type](objectData.description, objectData.message);
    }
  }
})();
