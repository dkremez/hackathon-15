'use strict';

var React = require('react/addons');
var Discount = require('./Discount');

//var Actions = require('actions/xxx')

require('styles/DiscountsList.sass');

var DiscountsList = React.createClass({
  render: function () {
    var List = [];
    if(this.props.discounts){
        List = this.props.discounts.map(function (discount) {
            return (
                <button key={discount.id} className="list-group-item">
                    <Discount key={discount.id} discount={discount} />
                </button>
            );
        });
    }
    return (
        <div className="list-group DiscountsList">
            {List}
        </div>
      );
  }
});

module.exports = DiscountsList;
