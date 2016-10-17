'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ContactCtrl', ['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.url = $location.path();

  }]);
