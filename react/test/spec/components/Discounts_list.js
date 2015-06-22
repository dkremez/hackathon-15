'use strict';

describe('Discounts_list', function () {
  var React = require('react/addons');
  var Discounts_list, component;

  beforeEach(function () {
    Discounts_list = require('components/Discounts_list.js');
    component = React.createElement(Discounts_list);
  });

  it('should create a new instance of Discounts_list', function () {
    expect(component).toBeDefined();
  });
});
