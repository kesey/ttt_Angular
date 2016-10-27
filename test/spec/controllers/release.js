'use strict';

describe('Controller: ReleaseCtrl', function () {

  // load the controller's module
  beforeEach(module('tttApp'));

  var ReleaseCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReleaseCtrl = $controller('ReleaseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('name your test', function () {
    expect(true).toBe(true);
  });
});
