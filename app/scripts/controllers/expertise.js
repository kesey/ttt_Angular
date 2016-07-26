'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ExpertiseCtrl
 * @description
 * # ExpertiseCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ExpertiseCtrl', ["$rootScope", "$location", function ($rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
