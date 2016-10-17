'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('LinksCtrl', ['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.url = $location.path();

  }]);
