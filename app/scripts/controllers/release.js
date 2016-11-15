'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ReleaseCtrl
 * @description
 * # ReleaseCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ReleaseCtrl',['$routeParams', 'server', 'config', '$sce', function ($routeParams, server, config, $sce) {

    angular.element(window.document)[0].title = config.pageTitle + ' - ' + $routeParams.artiste + ' - ' + $routeParams.titre;
    this.loading = true;
    this.zoomIn = false;

    this.getRelease = function() {
      server
        .get({model: 'cassette', action: 'view', param: $routeParams.id})
        .$promise
        .then(function(response) {
            console.log('server connect success');
            this.loading = false;
            this.infos = response.cassette[0];
            this.soundcloudUrl = $sce.trustAsResourceUrl(response.cassette[0].lien_soundcloud);
            this.artistes = [];
            angular.forEach(response.cassette, function(value) {
                this.push(value.nom);
            }, this.artistes);
            this.shipInfos = response.shipInfos;
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

    this.downloadFile = function(fileName) {
      server.post({
        model: 'cassette',
        action: 'download',
        nomFichier: fileName
      });
    };

    this.zoom = function() {
      this.zoomIn = !this.zoomIn;
    };

  }]);
