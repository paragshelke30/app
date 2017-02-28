/**
 * Exif Factory
 * @namespace nfExif
 */
(function () {
  'use strict';

  angular
    .module('app.services')
    .factory('appTemplate', appTemplate);

  appTemplate.$inject = [
    '$q',
    '$window',
    '$http',
    '$log',
  ];

  /**
   * @namespace Exif
   * @desc Application wide nfExif
   * @memberOf Factories
   */
  function appTemplate($q, $window, $http, $log) {
    var service = {
      getTemplate: getTemplate,
      getCss: getCss
    };

    return service;

    function getTemplate(templateName) {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: 'http://172.25.16.18:8080/api/template',
        params: {
          template: templateName
        }
      }).then(function successCallback(response) {
        deferred.resolve(response.data);
      }, function errorCallback(response) {
        $log.error('Error: ' + response);
        deferred.reject(response);
      });

      return deferred.promise;
    }

    function getCss(cssName) {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: 'http://172.25.16.18:8080/api/css',
        params: {
          css: cssName
        }
      }).then(function successCallback(response) {
        deferred.resolve(response.data);
      }, function errorCallback(response) {
        $log.error('Error: ' + response);
        deferred.reject(response);
      });

      return deferred.promise;
    }
  }
})();
