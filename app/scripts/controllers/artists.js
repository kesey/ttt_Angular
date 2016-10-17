'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ArtistsCtrl
 * @description
 * # ArtistsCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ArtistsCtrl', ['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.url = $location.path();

  }]);
