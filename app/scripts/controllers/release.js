'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ReleaseCtrl
 * @description
 * # ReleaseCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ReleaseCtrl',['$routeParams', 'server', 'config', function ($routeParams, server, config) {

    document.title = config.pageTitle + ' - ' + $routeParams.artiste + ' - ' + $routeParams.titre;
    this.loading = true;

    this.getRelease = function() {
      server
        .get({object: 'cassette', action: 'view', param: $routeParams.id})
        .$promise
        .then(function(response) {
            console.log('server connect success');
            this.loading = false;
            this.infos = response.cassette[0];
            this.shipInfos = response.shipInfos[0];
            this.date = response.date;
            this.prevRelease = response.cassPrev ? response.cassPrev : null;
            this.nextRelease = response.cassNext ? response.cassNext : null;
        }.bind(this), function(response) {
            console.log('server connect fail');
            this.loading = false;
            this.failInfos = response.data;
        }.bind(this));
    };

    this.getRelease();
  }]);
