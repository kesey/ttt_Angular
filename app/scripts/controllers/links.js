'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('LinksCtrl', ["$rootScope", "$location", function ($rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
