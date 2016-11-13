'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ReleaseCtrl
 * @description
 * # ReleaseCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ReleaseCtrl',['$routeParams', 'server', 'config', '$http', function ($routeParams, server, config, $http) {

    angular.element(window.document)[0].title = config.pageTitle + ' - ' + $routeParams.artiste + ' - ' + $routeParams.titre;
    this.loading = true;
    this.zoomIn = false;
    var fileName = '';

    this.getRelease = function() {
      server
        .get({model: 'cassette', action: 'view', param: $routeParams.id})
        .$promise
        .then(function(response) {
            console.log('server connect success');
            this.loading = false;
            this.infos = response.cassette[0];
            fileName = this.infos.download;
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

    this.downloadFile = function() {
        //server.post({model: 'cassette', action: 'download'});
        $http({
            url: 'http://localhost/Third_Type_Tapes_2_server/',
            method: 'POST',
            data: {model: 'cassette', action: 'prout'},
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
    };

    this.zoom = function() {
      this.zoomIn = !this.zoomIn;
    };

  }]);
