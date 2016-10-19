'use strict';

/**
 * @ngdoc service
 * @name tttApp.concatArray
 * @description
 * # concatArray concatenation du tableau b dans le a
 * Factory in the tttApp.
 */
angular.module('tttApp')
  .factory('concatArray', function () {

    return {
      concat: function (a, b) {
          a = b.reduce( function(coll,item){
              coll.push(item);
              return coll;
          }, a );

          return a.length;
      }
    };

  });
