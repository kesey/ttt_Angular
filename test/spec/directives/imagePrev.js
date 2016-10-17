'use strict';

describe('Directive: imagePrev', function () {

  // load the directive's module
  beforeEach(module('tttApp'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('name your test', function () {
    expect(true).toBe(true);
  });
});
