'use strict';

var Reflux = require('reflux');
//var Actions = require('actions/..');


var CategoriesStore = Reflux.createStore({
  listenables: Actions,


});

module.exports = CategoriesStore; 
