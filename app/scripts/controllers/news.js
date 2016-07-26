'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('NewsCtrl', ["$rootScope", "$location", function ($rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
