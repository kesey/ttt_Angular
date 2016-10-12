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
                  config.api + ':object/:action/:id',
                  {object: '@object', action: '@action', id:'@id'},
                  {'update': { method:'PUT' }}
                );
  }]);
