'use strict';

describe('Controller: EventCtrl', function () {

  // load the controller's module
  beforeEach(module('tttApp'));

  var EventCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventCtrl = $controller('EventCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('name your test', function () {
    expect(true).toBe(true);
  });
});
