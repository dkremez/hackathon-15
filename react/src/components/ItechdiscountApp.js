'use strict';

var React = require('react/addons');
var Discounts = require('./discounts/Discounts');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var ItechdiscountApp = React.createClass({
  render: function () {
    return (
      <div className='main'>
        <Discounts></Discounts>
      </div>
    );
  }
});

module.exports = ItechdiscountApp;
