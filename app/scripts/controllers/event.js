'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('EventCtrl', ['$routeParams', 'server', 'config', 'utility', function ($routeParams, server, config, utility) {

      angular.element(window.document)[0].title = config.pageTitle + ' - ' + $routeParams.date + ' - ' + $routeParams.titre;
      this.loading = true;
      this.zoomIn = false;

      this.getEvent = function() {
          server
              .get({model: 'event', action: 'view', param: $routeParams.id})
              .$promise
              .then(function(response) {
                  console.log('server connect success');
                  this.loading = false;
                  this.infos = response.event;
                  this.lieu = utility.htmldecode(response.event.lieu);
                  this.date = new Date(response.event.date_event).getTime();
                  this.dateMin = new Date(response.date.min).getTime();
                  this.dateMax = new Date(response.date.max).getTime();
                  this.previous = response.eventPrev ? response.eventPrev : null;
                  this.next = response.eventNext ? response.eventNext : null;
              }.bind(this), function(response) {
                  console.log('server connect fail');
                  this.loading = false;
                  this.failInfos = response.data;
              }.bind(this));
      };

      this.getEvent();

      this.zoom = function() {
          this.zoomIn = !this.zoomIn;
      };

  }]);
