'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:ReleasesCtrl
 * @description
 * # ReleasesCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('ReleasesCtrl', ['$rootScope', '$location', 'config', 'server', 'utility', function ($rootScope, $location, config, server, utility) {

    $rootScope.url = $location.path();

    this.loading = true;
    this.list = [];

    var offset = 0,
        pagination = config.pagination;

    this.getList = function() {
      this.busy = true;
      server
        .get({model: 'cassette', action: 'index', param: offset + ', ' + pagination})
        .$promise
        .then(function(response) {
            console.log('server connect success');
            this.loading = false;
            utility.concatArray(this.list, response.cassettes);
            this.artistes = response.artistes;
            var totalCassettes = parseInt(response.totalCassettes[0].total);
            if (offset < totalCassettes) { // désactive infiniteScroll quand toute la liste est affichée
                this.busy = false;
            }
            offset += pagination;
        }.bind(this), function(response) {
            console.log('server connect fail');
            this.loading = false;
            this.failInfos = response.data;
            this.busy = false;
        }.bind(this));
    };

    this.getList();

  }]);
