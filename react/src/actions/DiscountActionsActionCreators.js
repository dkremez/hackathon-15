'use strict';

var Reflux = require('reflux');

var DiscountActionsActionCreators  =  Reflux.createActions([
  'getDiscounts',
  'filterDiscounts',
  'getDiscount',
  'searchFilter',
  'getCategories',
  'filterByCategory'
]);


module.exports = DiscountActionsActionCreators;
