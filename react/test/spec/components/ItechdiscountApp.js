'use strict';

describe('ItechdiscountApp', function () {
  var React = require('react/addons');
  var ItechdiscountApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ItechdiscountApp = require('components/ItechdiscountApp.js');
    component = React.createElement(ItechdiscountApp);
  });

  it('should create a new instance of ItechdiscountApp', function () {
    expect(component).toBeDefined();
  });
});
