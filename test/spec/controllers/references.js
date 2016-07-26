'use strict';

describe('Controller: ReferencesCtrl', function () {

  // load the controller's module
  beforeEach(module('tttApp'));

  var ReferencesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReferencesCtrl = $controller('ReferencesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReferencesCtrl.awesomeThings.length).toBe(3);
  });
});
