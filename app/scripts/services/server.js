'use strict';

/**
 * @ngdoc service
 * @name tttApp.server
 * @description
 * # server
 * Factory in the tttApp.
 */
angular.module('tttApp')
  .factory('server', ['$resource', 'config', function($resource, config) {
      return $resource
                (
                  config.api + ':model/:action/:param',
                  {
                    model: '@model',
                    action: '@action',
                    param: '@param'
                  },
                  {
                    'update': {
                        method:'PUT'
                    },
                    'get': {
                        method:'GET',
                        cache: true
                    },
                    'post': {
                        method:'POST',
                        cache: true
                    }
                  }
                );
  }]);
