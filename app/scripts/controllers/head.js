'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('HeaderCtrl', ['$translate', function ($translate) {

    this.flagPath = 'images/' + localStorage.NG_TRANSLATE_LANG_KEY + '.png' || 'images/fr.png';

    this.changeLanguage = function(langKey) {
        $translate.use(langKey);
        this.flagPath = 'images/' + langKey + '.png';
    };

  }]);
