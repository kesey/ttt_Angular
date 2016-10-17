'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('EventsCtrl', ['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.url = $location.path();

  }]);
