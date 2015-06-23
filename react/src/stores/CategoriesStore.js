'use strict';

var Reflux = require('reflux');
var $ = require('jquery');
var DiscountActions = require('../actions/DiscountActionsActionCreators');
var apiEndpoint = require('../constants/endpoints');
var _ = require('lodash');


var CategoriesStore = Reflux.createStore({
    listenables: DiscountActions,
    categories: [],
    sourceUrl: apiEndpoint + '/categories',

    init: function () {
        this.getCategories();
    },

    getCategories: function () {
        var that = this;
        $.get(this.sourceUrl, function (data) {
            console.log('fetch complete');
            that.categories = data;
            that.trigger(that.categories);
        });
    }

});

module.exports = CategoriesStore;
