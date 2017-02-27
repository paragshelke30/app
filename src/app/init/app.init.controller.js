(function () {
  angular
    .module('app.init')
    .controller('InitController', InitController);

  InitController.$inject = [
    '$scope',
    '$window',
    '$log'
  ];

  function InitController($scope, $window, $log) {
    var vm = this,
      body = document.body;

    vm.color = {
      back1: '',
      back2: '',
      front: ''
    };
    vm.confirmed = '#00bcd4';
    vm.editToggle = false;

    activate();

    function activate() {
      var bodyStyles = window.getComputedStyle(document.body);
      vm.color.back1 = bodyStyles.getPropertyValue('--back-one').replace(/\s/g,'');
      vm.color.back2 = bodyStyles.getPropertyValue('--back-two').replace(/\s/g,'');
      vm.color.front = bodyStyles.getPropertyValue('--front-color').replace(/\s/g,'');
    }

    vm.change = function (name, value) {
      console.log('Name',name);
      console.log('Value',value);
      body.style.setProperty(name, value);
    };
  }
})();
