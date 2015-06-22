'use strict';

var Reflux = require('reflux');
var $ = require('jquery');
var DiscountActions = require('../actions/DiscountActionsActionCreators');
var apiEndpoint = require('../constants/endpoints');

var DiscountsStore = Reflux.createStore({
  listenables: DiscountActions,
  discounts: [],
  sourceUrl: apiEndpoint + '/discounts',

  init: function () {
      this.getDiscounts();
  },

  getDiscounts: function () {
    var that = this;
    $.get(this.sourceUrl, function (data) {
      console.log('fetch complete');
      that.discounts = data;
      that.trigger(that.discounts);
    });
  }

});

module.exports = DiscountsStore;
