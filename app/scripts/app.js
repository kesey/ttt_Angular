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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/references', {
        templateUrl: 'views/references.html',
        controller: 'ReferencesCtrl',
        controllerAs: 'references'
      })
      .when('/expertise', {
        templateUrl: 'views/expertise.html',
        controller: 'ExpertiseCtrl',
        controllerAs: 'expertise'
      })
      .when('/agence', {
        templateUrl: 'views/agence.html',
        controller: 'AgenceCtrl',
        controllerAs: 'agence'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'news'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
