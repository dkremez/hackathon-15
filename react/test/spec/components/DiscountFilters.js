'use strict';

describe('DiscountFilters', function () {
  var React = require('react/addons');
  var DiscountFilters, component;

  beforeEach(function () {
    DiscountFilters = require('components/DiscountFilters.js');
    component = React.createElement(DiscountFilters);
  });

  it('should create a new instance of DiscountFilters', function () {
    expect(component).toBeDefined();
  });
});
