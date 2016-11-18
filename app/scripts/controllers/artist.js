'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ArtistCtrl
 * @description
 * # ArtistCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ArtistCtrl',['$routeParams', 'server', 'config', function ($routeParams, server, config) {

    angular.element(window.document)[0].title = config.pageTitle + ' - ' + $routeParams.artiste;
    this.loading = true;
    this.zoomIn = false;

    this.getArtist = function() {
      server
          .get({model: 'artiste', action: 'view', param: $routeParams.id})
          .$promise
          .then(function(response) {
            console.log('server connect success');
            this.loading = false;
            this.infos = response.artiste[0];
            this.cassettes = [];
            angular.forEach(response.artiste, function(value) {
              var cassette = {};
              cassette.id = value.id_cassette;
              cassette.code = value.code;
              cassette.artiste = value.nom;
              cassette.titre = value.titre;
              cassette.image = value.image_pochette_resize;
              this.push(cassette);
            }, this.cassettes);
            this.id = parseInt(response.artiste[0].id_artiste);
            this.idMin = parseInt(response.id.min);
            this.idMax = parseInt(response.id.max);
            this.previous = response.artPrev ? response.artPrev : null;
            this.next = response.artNext ? response.artNext : null;
          }.bind(this), function(response) {
            console.log('server connect fail');
            this.loading = false;
            this.failInfos = response.data;
          }.bind(this));
    };

    this.getArtist();

    this.zoom = function() {
      this.zoomIn = !this.zoomIn;
    };

  }]);
