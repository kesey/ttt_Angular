'use strict';

describe('Controller: ReleasesCtrl', function () {

  // load the controller's module
  beforeEach(module('tttApp'));

  var ReleasesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReleasesCtrl = $controller('ReleasesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('name your test', function () {
   expect(true).toBe(true);
  });
});
