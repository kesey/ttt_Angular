'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('HeaderCtrl', ['$translate', 'SweetAlert', function ($translate, SweetAlert) {

    this.flagPath = 'images/' + localStorage.NG_TRANSLATE_LANG_KEY + '.png' || 'images/fr.png';

    this.changeLanguage = function(langKey) {
        $translate.use(langKey);
        this.flagPath = 'images/' + langKey + '.png';
    };

    this.alert = function() {
        SweetAlert.swal({
                title: 'Are you sure?',
                text: 'Your will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel plx!',
                closeOnConfirm: false,
                closeOnCancel: false },
            function(isConfirm){
                if (isConfirm) {
                    SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                } else {
                    SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
    };

  }]);
