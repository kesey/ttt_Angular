'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:LabelCtrl
 * @description
 * # LabelCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('LabelCtrl', ['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.url = $location.path();

  }]);
