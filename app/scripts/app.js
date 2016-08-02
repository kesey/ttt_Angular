'use strict';

/**
 * @ngdoc overview
 * @name tttApp
 * @description
 * # tttApp
 *
 * Main module of the application.
 */

angular
  .module('tttApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(['$routeProvider', '$translateProvider' ,function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/releases', {
        templateUrl: 'views/releases.html',
        controller: 'ReleasesCtrl',
        controllerAs: 'releases'
      })
      .when('/label', {
        templateUrl: 'views/label.html',
        controller: 'LabelCtrl',
        controllerAs: 'label'
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl',
        controllerAs: 'artists'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl',
        controllerAs: 'links'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/releases'
      });

      $translateProvider
          .useSanitizeValueStrategy('sanitize')
          .useStaticFilesLoader({
              prefix: 'translate/',
              suffix: '.json'
          })
          .preferredLanguage('fr')
          // remember language
          .useLocalStorage();
  }]);
