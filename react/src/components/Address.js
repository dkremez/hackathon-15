'use strict';

var React = require('react/addons');
var Link = require('react-router').Link;

//var Actions = require('actions/xxx')

var Address = React.createClass({

  render: function () {
    var address = this.props.address;
    return (
        <div className="Address">
            <Link to={"/address/" + address.id + "?venue=" + address.foursquare_venue}>{this.props.address.address}</Link>
        </div>
      );
  }
});

module.exports = Address;

