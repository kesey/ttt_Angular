'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('MainCtrl', ["$rootScope", "$location", function ($rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
