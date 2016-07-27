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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
