'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var DiscountActions = require('actions/DiscountActionsActionCreators');
var CategoriesStore = require('../../stores/CategoriesStore');

require('styles/DiscountFilters.sass');

var DiscountFilters = React.createClass({
  mixins: [Reflux.connect(CategoriesStore, 'categories')],

  searchTextChanged: function (e) {
    DiscountActions.searchFilter(e.target.value);
  },
  searchCategoryChanged: function () {
    var category_id = this.refs.category.getDOMNode().value;
    DiscountActions.filterByCategory(category_id);
  },
  render: function () {
    var Options = [];
    if (this.state.categories) {
      Options = this.state.categories.map(function (category) {
        return <option key={category.id} value={category.id}>{category.name}</option>;
      });
    }
    return (
      <form className="input-group col-md-12">
        <div className="input-group-btn">
          <select className="form-group btn selected-category" ref="category"
                  onChange={this.searchCategoryChanged}>
            <option value="" disabled>Категории</option>
            {Options}
          </select>
        </div>
        <input onChange={this.searchTextChanged} ref="search" type="text" className="form-control col-md-6"
               placeholder="Отфильтруй"/>
                <span className="input-group-btn">
                    <button className="btn btn-primary show-all" type="button" onClick={DiscountActions.getDiscounts}>
                      Все
                    </button>
                </span>
      </form>
    );
  }
});

module.exports = DiscountFilters;

