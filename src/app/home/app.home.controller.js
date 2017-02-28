(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = [
    '$rootScope',
    '$window',
    '$log'
  ];

  /* @ngInject */
  function HomeController($rootScope, $window, $log) {
    var vm = this;
    vm.translations = $rootScope.translations.home;
  }
})();
