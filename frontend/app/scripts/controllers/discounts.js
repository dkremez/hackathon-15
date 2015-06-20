'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:DiscountsCtrl
 * @description
 * # DiscountsCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('DiscountsCtrl', function ($scope, Discount) {

    $scope.markers = [];
    $scope.discounts = Discount.query(function(data) {
      _.map(data, makeMarker);
    })

    function makeMarker(discount) {
      for(var i = 0, length = discount.addresses.length; i < length; i++) {
        $scope.markers.push({
          id: discount.addresses[i].id,
          latitude: discount.addresses[i].latitude,
          longitude: discount.addresses[i].longitude
        });
      } 
    }

    $scope.hover = function(e){
      //debugger;
    };

  });
