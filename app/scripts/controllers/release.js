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
            //this.soundcloudUrl = $sce.trustAsResourceUrl(response.cassette[0].lien_soundcloud);
            this.bandcampUrl = $sce.trustAsResourceUrl(response.cassette[0].lien_bandcamp);
            this.youtubeUrl = $sce.trustAsResourceUrl(response.cassette[0].lien_youtube);
            this.artistes = [];
            angular.forEach(response.cassette, function(value) {
                var artiste = {};
                artiste.id = value.id_artiste;
                artiste.nom = value.nom;
                artiste.image = value.image_artiste;
                this.push(artiste);
            }, this.artistes);
            this.shipInfos = response.shipInfos;
            this.date = new Date(response.cassette[0].date_sortie).getTime();
            this.dateMin = new Date(response.date.min).getTime();
            this.dateMax = new Date(response.date.max).getTime();
            this.previous = response.cassPrev ? response.cassPrev : null;
            this.next = response.cassNext ? response.cassNext : null;
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
