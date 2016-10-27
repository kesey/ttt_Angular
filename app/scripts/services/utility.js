'use strict';

/**
 * @ngdoc service
 * @name tttApp.utility
 * @description
 * # utility methodes utiles
 * Factory in the tttApp.
 */
angular.module('tttApp')
  .factory('utility', function () {

    return {
      concatArray: function (a, b) { // concatenation du tableau b dans le a
          a = b.reduce( function(coll,item){
              coll.push(item);
              return coll;
          }, a );

          return a.length;
      }
    };

  });
