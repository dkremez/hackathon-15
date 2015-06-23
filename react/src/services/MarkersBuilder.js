'use strict';
var _ = require('lodash');
var apiEndpoint = require('../constants/endpoints');
var markers = [];

function makeMarker(discount) {
    for (var i = 0, length = discount.addresses.length; i < length; i++) {
        markers.push({
            id: discount.addresses[i].id,
            lat: discount.addresses[i].latitude,
            lng: discount.addresses[i].longitude,
            title: discount.title,
            discount: discount.discount,
            category: discount.category.name,
            link: discount.link,
            icon: {
                url: apiEndpoint + discount.category.icon.icon.url,
                //url: "https://maps.google.com/mapfiles/kml/shapes/schools_maps.png"
            },
            description: discount.description,
            address: discount.addresses[i].address
        });
    }
}

var MarkersBuilder = {
    build: function (discounts){
        markers = [];
        _.map(discounts, makeMarker);

        return markers;
    }
};

module.exports = MarkersBuilder;
