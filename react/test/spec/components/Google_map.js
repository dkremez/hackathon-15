'use strict';

describe('Google_map', function () {
  var React = require('react/addons');
  var Google_map, component;

  beforeEach(function () {
    Google_map = require('components/Google_map.js');
    component = React.createElement(Google_map);
  });

  it('should create a new instance of Google_map', function () {
    expect(component).toBeDefined();
  });
});
