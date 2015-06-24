'use strict';

var Reflux = require('reflux');

var AddressStore = Reflux.createStore({
  listenables: []
});

module.exports = AddressStore;
