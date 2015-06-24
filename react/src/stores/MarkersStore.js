'use strict';

var Reflux = require('reflux');
var _ = require('lodash');
var DiscountsStore = require('./DiscountsStore');
var apiEndpoint = require('../constants/endpoints');
var google = global.google;
var MarkerActions = require('actions/MarkerActionCreators');


var MarkersStore = Reflux.createStore({
    listenables: [MarkerActions],

    init: function() {
        this.listenTo(DiscountsStore, this.output);
        this.markers = [];
        this.allMarkers = [];
    },

    // Callback
    output: function(discounts) {
        if (discounts.length) {
            this.markers = [];
            discounts.forEach(this.makeMarker);
            // Pass the data on to listeners
            this.allMarkers = this.markers;
            this.trigger(this.markers);
        }
    },

    filterByDiscountId: function (discountId) {
        if(discountId){
            this.markers = _.filter(this.allMarkers, function (m) {
                return m.discountId === parseInt(discountId);
            });
        } else {
            this.markers = this.allMarkers;
        }
        this.trigger(this.markers);
    },

    makeMarker: function (discount) {
        var that = this;
        if(discount.addresses.length){
            discount.addresses.forEach(function (address) {
                var marker = {
                    id: address.id,
                    lat: address.latitude,
                    lng: address.longitude,
                    title: discount.title,
                    active: discount.active,
                    discount: discount.discount,
                    category: discount.category.name,
                    link: discount.link,
                    icon: { url: apiEndpoint + discount.category.icon.icon.url },
                    description: discount.description,
                    address: address.address
                };
                var myLatlng = new google.maps.LatLng(marker.lat, marker.lng);
                var pinIcon = new google.maps.MarkerImage(
                    marker.icon.url,
                    null, /* size is determined at runtime */
                    null, /* origin is 0,0 */
                    null, /* anchor is bottom center of the scaled image */
                    marker.active ? new google.maps.Size(50, 60) : null
                );
                var googleMarker = new google.maps.Marker({
                    id: marker.id,
                    position: myLatlng,
                    title: marker.title,
                    draggable: false,
                    icon: pinIcon,
                    discountId: discount.id
                });
                that.markers.push(googleMarker);
            });

        }
    }
});

module.exports = MarkersStore;
