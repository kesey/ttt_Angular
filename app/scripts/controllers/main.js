'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('MainCtrl', ["$translate", function ($translate) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.changeLanguage = function(langKey) {
        $translate.use(langKey);
    }
  }]);
