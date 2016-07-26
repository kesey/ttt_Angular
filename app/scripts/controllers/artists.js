'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ArtistsCtrl
 * @description
 * # ArtistsCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ArtistsCtrl', ["$rootScope", "$location", function ($rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
