'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ReleasesCtrl
 * @description
 * # ReleasesCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ReleasesCtrl', ['$rootScope', '$location', function ($rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
  }]);
