'use strict';

describe('AddressStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/AddressStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
