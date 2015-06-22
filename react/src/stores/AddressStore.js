'use strict';

var Reflux = require('reflux');
//var Actions = require('actions/..');


var AddressStore = Reflux.createStore({
  listenables: Actions,


});

module.exports = AddressStore; 
