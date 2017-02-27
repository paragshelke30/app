(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = [
    'appTemplate',
    '$window',
    '$log'
  ];

  /* @ngInject */
  function HomeController(appTemplate, $window, $log) {
    var Applist = $window.Applist,
        vm = this;

    window.apps.list(function (list) {
      vm.appList = JSON.parse(list);
    });

    /*Applist.createEvent(success, error);

    function success(appList) {
      alert(JSON.stringify(appList));
    }

    function error(appList) {
      alert('Oopsie! ' + JSON.stringify(appList));
    }*/

    appTemplate.getTemplate('listButton.html')
      .then(function (data) {
        vm.htmlData = data.data;
      }, function (error) {
        $log.error(error);
      });

    appTemplate.getCss('home.css')
      .then(function (data) {
        var sheet = document.createElement('style');
        sheet.innerHTML = data.data;
        document.body.appendChild(sheet);
      }, function (error) {
        $log.error(error);
      });
  }
})();