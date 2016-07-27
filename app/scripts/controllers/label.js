'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:LabelCtrl
 * @description
 * # LabelCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('LabelCtrl', ['$rootScope', '$location', 'config', function ($rootScope, $location, config) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();
    this.api = config.api;
  }]);
