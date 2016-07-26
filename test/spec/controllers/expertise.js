'use strict';

describe('Controller: ExpertiseCtrl', function () {

  // load the controller's module
  beforeEach(module('tttApp'));

  var ExpertiseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpertiseCtrl = $controller('ExpertiseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpertiseCtrl.awesomeThings.length).toBe(3);
  });
});
