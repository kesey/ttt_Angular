'use strict';

/**
 * @ngdoc directive
 * @name tttApp.directive:scrollTo
 * @description
 * # scrollTo
 */
angular.module('tttApp')
  .directive('scrollTo', function ($location, $anchorScroll, $window) {
    return {
      template: '<a class="aimant" href=""><img src="images/arrow_up.png" alt="arrow_up"/></a>',
      restrict: 'A',
      replace: true,
      link: function postLink(scope, element, attrs) {
        element.hide();
        element.bind('click', function(event) {
          event.stopPropagation();
          var location = attrs.scrollTo;
          $location.hash(location);
          $anchorScroll();
        });
        angular.element($window).bind('scroll', function() {
          if (this.pageYOffset >= 100) {
              element.fadeIn();
          } else {
              element.fadeOut();
          }
        });
      }
    };
  });
