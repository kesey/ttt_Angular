'use strict';

describe('Controller: ArtistCtrl', function () {

  // load the controller's module
  beforeEach(module('tttApp'));

  var ArtistCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtistCtrl = $controller('ArtistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('name your test', function () {
    expect(true).toBe(true);
  });
});
