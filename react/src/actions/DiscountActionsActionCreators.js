'use strict';

var Reflux = require('reflux');

var DiscountActionsActionCreators  =  Reflux.createActions([
  'getDiscounts',
  'filterDiscounts',
  'getDiscount',
  'searchFilter'
]);


module.exports = DiscountActionsActionCreators;
