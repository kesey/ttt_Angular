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
    'pascalprecht.translate',
    'wu.masonry',
    'infinite-scroll',
    'td.easySocialShare',
    'oitozero.ngSweetAlert',
    'ngMap'
  ])
  .config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/label', {
        templateUrl: 'views/label.html',
        controller: 'LabelCtrl',
        controllerAs: 'label',
        title: 'label'
      })
      .when('/releases', {
        templateUrl: 'views/releases.html',
        controller: 'ReleasesCtrl',
        controllerAs: 'releases',
        title: 'releases'
      })
      .when('/release/:id/:code/:artiste/:titre', {
        templateUrl: 'views/release.html',
        controller: 'ReleaseCtrl',
        controllerAs: 'release',
        title: 'release'
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl',
        controllerAs: 'artists',
        title: 'artists'
      })
      .when('/artist/:id/:artiste', {
        templateUrl: 'views/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'artist',
        title: 'artist'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events',
        title: 'events'
      })
      .when('/event/:id/:date/:titre', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        controllerAs: 'event'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl',
        controllerAs: 'links',
        title: 'links'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact',
        title: 'contact'
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
  }])
  .run(['$rootScope', '$route', '$filter', '$translate', function($rootScope, $route, $filter, $translate) {
    function changeTitle() {
        var dynamicTitle = $filter('uppercase')($route.current.title);
        document.title = 'Third Type Tapes - ' + $translate.instant(dynamicTitle);
    }

    $rootScope.$on('$routeChangeSuccess', function() {
        changeTitle();
    });

    $rootScope.$on('$translateChangeSuccess', function () {
        changeTitle();
    });
  }]);
