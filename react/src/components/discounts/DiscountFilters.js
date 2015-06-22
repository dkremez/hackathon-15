'use strict';

var React = require('react/addons');

var DiscountActions = require('actions/DiscountActionsActionCreators');

require('styles/DiscountFilters.sass');

var DiscountFilters = React.createClass({
  onChange: function(e){
      DiscountActions.searchFilter(e.target.value)
  },

  render: function () {
    return (
        <form className="input-group col-md-12">
            <div className="input-group-btn">
                <select className="form-group btn selected-category" >
                    <option value="" disabled></option>
                </select>
            </div>
            <input onChange={this.onChange} ref="search" type="text" className="form-control col-md-6" placeholder="Отфильтруй" />
            <span className="input-group-btn">
                <button className="btn btn-primary show-all" type="button" onClick={DiscountActions.getDiscounts}>Все</button>
            </span>
        </form>
      );
  }
});

module.exports = DiscountFilters;

