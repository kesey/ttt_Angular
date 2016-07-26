'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('EventsCtrl', ["$rootScope", "$location", function ($rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
