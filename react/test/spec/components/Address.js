'use strict';

describe('Address', function () {
  var React = require('react/addons');
  var Address, component;

  beforeEach(function () {
    Address = require('components/Address.js');
    component = React.createElement(Address);
  });

  it('should create a new instance of Address', function () {
    expect(component).toBeDefined();
  });
});
