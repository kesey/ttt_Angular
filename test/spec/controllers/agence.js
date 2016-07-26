'use strict';

describe('Controller: AgenceCtrl', function () {

  // load the controller's module
  beforeEach(module('tttApp'));

  var AgenceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgenceCtrl = $controller('AgenceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgenceCtrl.awesomeThings.length).toBe(3);
  });
});
