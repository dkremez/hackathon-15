'use strict';

describe('Discounts_main', function () {
  var React = require('react/addons');
  var Discounts_main, component;

  beforeEach(function () {
    Discounts_main = require('components/Discounts_main.js');
    component = React.createElement(Discounts_main);
  });

  it('should create a new instance of Discounts_main', function () {
    expect(component).toBeDefined();
  });
});
