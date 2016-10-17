'use strict';

describe('Controller: LinksCtrl', function () {

  // load the controller's module
  beforeEach(module('tttApp'));

  var LinksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinksCtrl = $controller('LinksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('name your test', function () {
    expect(true).toBe(true);
  });
});
