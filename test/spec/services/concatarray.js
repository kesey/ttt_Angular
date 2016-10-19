'use strict';

describe('Service: concatArray', function () {

  // load the service's module
  beforeEach(module('tttApp'));

  // instantiate service
  var concatArray;
  beforeEach(inject(function (_concatArray_) {
    concatArray = _concatArray_;
  }));

  it('should do something', function () {
    expect(!!concatArray).toBe(true);
  });

});
