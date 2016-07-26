'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:AgenceCtrl
 * @description
 * # AgenceCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('AgenceCtrl', ["$rootScope", "$location", function ($rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
