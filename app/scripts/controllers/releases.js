'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ReleasesCtrl
 * @description
 * # ReleasesCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ReleasesCtrl', ['$rootScope', '$location', '$http', 'config', function ($rootScope, $location, $http, config) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();

    this.serverResponse = '';

    this.serverConnect = function() {
        $http({
            method: 'GET',
            url: config.api + 'cassette'
        }).then(function(response) {
            console.log('success');
            this.serverResponse = response;
        }.bind(this), function(response) {
            console.log('fail');
            this.serverResponse = response;
        }.bind(this));
    };
  }]);
