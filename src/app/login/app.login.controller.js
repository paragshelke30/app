(function () {
  angular
    .module('app.login')
    .controller('loginController', loginController);

  loginController.$inject = [
    '$scope',
    'commonService',
    '$state',
    '$window',
    '$log'
  ];

  function loginController($scope, commonService, $state, $window, $log) {
    var vm = this,
      body = document.body,
      translationInterval;

    translationInterval = setInterval(function () {
      if (angular.isDefined(commonService.rootScope.translations)) {
        vm.translations = commonService.rootScope.translations.login;
        clearInterval(translationInterval);
      }
    }, 100);

    vm.color = {
      back1: '',
      back2: '',
      front: ''
    };
    vm.confirmed = '#00bcd4';
    vm.editToggle = false;

    vm.organizations = [{
        name: 'Mauro',
        role: 'navigator'
      },
      {
        name: 'Silvia',
        role: 'chef'
      },
      {
        name: 'Merlino',
        role: 'canaglia'
      }
    ];

    vm.login = login;
    vm.change = change;
    vm.setOrganization = setOrganization;

    activate();

    function activate() {
      var bodyStyles = window.getComputedStyle(document.body);
      vm.color.back1 = bodyStyles.getPropertyValue('--back-one').replace(/\s/g, '');
      vm.color.back2 = bodyStyles.getPropertyValue('--back-two').replace(/\s/g, '');
      vm.color.front = bodyStyles.getPropertyValue('--front-color').replace(/\s/g, '');
    }

    function login() {
      commonService.toast('error', vm.translations);
    }

    function change(name, value) {
      body.style.setProperty(name, value);
    }

    function setOrganization() {
      if (vm.organization) {
        $state.go('home');
      }
    }
  }
})();
