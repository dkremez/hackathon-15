'use strict';

var Reflux = require('reflux');
var $ = require('jquery');
var DiscountActions = require('../actions/DiscountActionsActionCreators');
var apiEndpoint = require('../constants/endpoints');
var _ = require('lodash');

var DiscountsStore = Reflux.createStore({
  listenables: DiscountActions,
  discounts: [],
  allDiscounts: [],
  sourceUrl: apiEndpoint + '/discounts',

  init: function () {
    this.getDiscounts();
  },
  searchFilter: function (text) {
    var query = text.toLowerCase();
    this.discounts = _.filter(this.allDiscounts, function (d) {
      return d.title.toLowerCase().includes(query) || d.description.toLowerCase().includes(query);
    });
    this.trigger(this.discounts);
  },
  filterByCategory: function (category_id) {
    this.discounts = _.filter(this.allDiscounts, function (d) {
      return d.category.id == category_id
    });
    this.trigger(this.discounts);
  },
  getDiscounts: function () {
    var that = this;
    $.get(this.sourceUrl, function (data) {
      console.log('fetch complete');
      that.discounts = data;
      that.allDiscounts = that.discounts;
      that.trigger(that.discounts);
    });
  }

});

module.exports = DiscountsStore;
