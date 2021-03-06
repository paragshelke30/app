(function () {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  runBlock.$inject = ['$ionicPlatform',
    '$ionicHistory',
    '$templateCache',
    '$rootScope',
    '$log',
    'appTemplate',
    'nfLocalization'
  ];

  function runBlock($ionicPlatform,
    $ionicHistory,
    $templateCache,
    $rootScope,
    $log,
    appTemplate,
    nfLocalization) {
    var localizationConfig = {
      locale: navigator.language || '',
      path: 'locales/'
    };

    nfLocalization.init(localizationConfig)
      .then(function () {
        $rootScope.translations = nfLocalization.getTexts();
      });

    $ionicPlatform.ready(defaultSettings);

    function defaultSettings() {
      $ionicPlatform.registerBackButtonAction(function (e) {
        e.preventDefault();
      }, 100);

      $ionicHistory.nextViewOptions({
        disableAnimate: false,
        disableBack: false
      });

      // Above the keyboard for form inputs
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // Cordova plugin org.apache.cordova.statusbar required
        if (ionic.Platform.isIOS()) {
          StatusBar.backgroundColorByName('black');
          StatusBar.overlaysWebView(false);
        }
      }

      $ionicPlatform.on('resume', onResume);
      $ionicPlatform.on('pause', onPause);
    }

    function onResume() {
      $rootScope.isAppInBackground = false;
    }

    function onPause() {
      $rootScope.isAppInBackground = true;
    }
  }
})();
