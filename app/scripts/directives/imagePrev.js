'use strict';

/**
 * @ngdoc directive
 * @name tttApp.directive:imageFade
 * @description
 * # imageFade
 */
angular.module('tttApp')
  .directive('imagePrev', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        element.css({
          'background-image' : 'url(' + attrs.imagePrev + ')'
        });

      }
    };
  });
