(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = ['$ionicConfigProvider', 'toastrConfig'];

  function configure($ionicConfigProvider, toastrConfig) {
    $ionicConfigProvider.tabs.position('bottom');
    angular.extend(toastrConfig, {
      positionClass: 'toast-bottom-full-width',
      target: 'body'
    });
  }
})();
