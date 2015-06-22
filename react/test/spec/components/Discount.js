'use strict';

describe('Discount', function () {
  var React = require('react/addons');
  var Discount, component;

  beforeEach(function () {
    Discount = require('components/Discount.js');
    component = React.createElement(Discount);
  });

  it('should create a new instance of Discount', function () {
    expect(component).toBeDefined();
  });
});
