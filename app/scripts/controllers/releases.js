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
    this.loading = true;
    $http({
        method: 'GET',
        url: config.api + 'cassette'
    }).then(function(response) {
        console.log('success');
        this.loading = false;
        this.list = response.data.cassettes;
        this.artistes = response.data.artistes;
    }.bind(this), function() {
        console.log('fail');
    }.bind(this));

  }]);
