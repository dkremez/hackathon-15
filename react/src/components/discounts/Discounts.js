'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var DiscountsList = require('./DiscountsList');
var GoogleMap = require('./GoogleMap');
var DiscountFilters = require('./DiscountFilters');
var DiscountsStore = require('../../stores/DiscountsStore');

//var Actions = require('actions/xxx')

require('styles/Discounts.sass');

var Discounts = React.createClass({
  mixins: [Reflux.connect(DiscountsStore, 'discounts')],
  render: function () {
    return (
      <div className="Discounts row">
        <div className='col-md-4 npr'>
          <DiscountFilters discounts={this.state.discounts}/>
          <DiscountsList discounts={this.state.discounts}/>
        </div>
        <div className='col-md-8 npl npr'>
          <GoogleMap/>
        </div>
      </div>
    );
  }
});

module.exports = Discounts;
