'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ReleasesCtrl
 * @description
 * # ReleasesCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ReleasesCtrl', ['$rootScope', '$location', 'server', function ($rootScope, $location, server) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = $location.path();

    this.loading = true;

    server
        .get({object: 'cassette'})
        .$promise
        .then(function(response) {
            console.log('server connect success');
            this.loading = false;
            this.list = response.cassettes;
            this.artistes = response.artistes;
        }.bind(this), function(response) {
            console.log('server connect fail');
            this.loading = false;
            this.failInfos = response.data;
        }.bind(this));

  }]);
