'use strict';

/**
 * @ngdoc directive
 * @name tttApp.directive:imageFade
 * @description
 * # imageFade
 */
angular.module('tttApp')
  .directive('imagePrev',['$q', '$window', function ($q, $window) {

    // load the image object with url of background image
    var loadImage = function(src) {
        var deferred = $q.defer(),
            image = new Image();

            image.src = src;
            image.onload = function() {
                deferred.resolve(image);
            };

        return deferred.promise;
    };

    // Calcul the width and height of the
    // background image.
    var getBackgroundSize = function(elem, image) {
      // This:
      //       * Gets elem computed styles:
      //             - CSS background-size
      //             - element's width and height
      //       * Extracts background URL
      var computedStyle = $window.getComputedStyle(elem),
          cssSize = computedStyle.backgroundSize,
          elemW = parseInt(computedStyle.width.replace('px', ''), 10),
          elemH = parseInt(computedStyle.height.replace('px', ''), 10),
          elemDim = [elemW, elemH],
          computedDim = [],
          ratio;
      // Determine the 'ratio'
      ratio = image.width > image.height ? image.width / image.height : image.height / image.width;
      // Split background-size properties into array
      cssSize = cssSize.split(' ');
      // First property is width. It is always set to something.
      computedDim[0] = cssSize[0];
      // If height not set, set it to auto
      computedDim[1] = cssSize.length > 1 ? cssSize[1] : 'auto';
      if(cssSize[0] === 'cover') {
          // Width is greater than height
          if(elemDim[0] > elemDim[1]) {
              // Elem's ratio greater than or equal to img ratio
              if(elemDim[0] / elemDim[1] >= ratio) {
                  computedDim[0] = elemDim[0];
                  computedDim[1] = 'auto';
              } else {
                  computedDim[0] = 'auto';
                  computedDim[1] = elemDim[1];
              }
          } else {
              computedDim[0] = 'auto';
              computedDim[1] = elemDim[1];
          }
      } else if(cssSize[0] === 'contain') {
          // Width is less than height
          if(elemDim[0] < elemDim[1]) {
              computedDim[0] = elemDim[0];
              computedDim[1] = 'auto';
          } else {
              // elem's ratio is greater than or equal to img ratio
              if(elemDim[0] / elemDim[1] >= ratio) {
                  computedDim[0] = 'auto';
                  computedDim[1] = elemDim[1];
              } else {
                  computedDim[1] = 'auto';
                  computedDim[0] = elemDim[0];
              }
          }
      } else {
          // If not 'cover' or 'contain', loop through the values
          for(var i = cssSize.length; i--;) {
              // Check if values are in pixels or in percentage
              if (cssSize[i].indexOf('px') > -1) {
                  // If in pixels, just remove the 'px' to get the value
                  computedDim[i] = cssSize[i].replace('px', '');
              } else if (cssSize[i].indexOf('%') > -1) {
                  // If percentage, get percentage of elem's dimension
                  // and assign it to the computed dimension
                  computedDim[i] = elemDim[i] * (cssSize[i].replace('%', '') / 100);
              }
          }
      }
      // If both values are set to auto, return image's
      // original width and height
      if(computedDim[0] === 'auto' && computedDim[1] === 'auto') {
          computedDim[0] = image.width;
          computedDim[1] = image.height;
      } else {
          // Depending on whether width or height is auto,
          // calculate the value in pixels of auto.
          // ratio in here is just getting proportions.
          ratio = computedDim[0] === 'auto' ? image.height / computedDim[1] : image.width / computedDim[0];
          computedDim[0] = computedDim[0] === 'auto' ? image.width / ratio : computedDim[0];
          computedDim[1] = computedDim[1] === 'auto' ? image.height / ratio : computedDim[1];
      }
      // Return an object with the width and height of the
      // background image.
      return {
          width: computedDim[0],
          height: computedDim[1]
      };

    };

    return {
      restrict: 'A',
      compile: function compile() {
        return {
          pre: function preLink(scope, element, attrs) {

            element.css({
              'background-image' : 'url(' + attrs.imagePrev + ')'
            });

          },
          post: function postLink(scope, element, attrs) {

            if(element.hasClass('autosize')) {
              var imageLoadOk;
              imageLoadOk = loadImage(attrs.imagePrev);
              imageLoadOk
                  .then(function(image) {
                    var backGroundImgSize = getBackgroundSize(element[0], image);

                    element
                        .parents('.preview')
                        .css({
                            'width': backGroundImgSize.width,
                            'height': backGroundImgSize.height
                        });

                    element
                        .parents('.grid')
                        .masonry('layout');
                  });
            }

          }
        };
      }
    };
  }]);
