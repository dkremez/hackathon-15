'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:DiscountsCtrl
 * @description
 * # DiscountsCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('DiscountsCtrl', function ($scope, Discount, $stateParams, filterFilter, $timeout) {
    $scope.discountId = $stateParams.discountId;

    $scope.discounts = Discount.query();
    $scope.markerClick = markerClick;

    $scope.hoverItem = function(e){
       // here will be code that highlight item on map
    };

    $scope.markers = [];
    $scope.discounts = Discount.query(function(data) {
      _.map(data, makeMarker);
    });

    function makeMarker(discount) {
      for (var i = 0, length = discount.addresses.length; i < length; i++) {
        $scope.markers.push({
          id: discount.addresses[i].id,
          coords: {
            latitude: discount.addresses[i].latitude,
            longitude: discount.addresses[i].longitude
          },
          title: discount.title,
          discount: discount.discount,
          link: discount.link,
          icon: {
            // url: discount.category.icon
            url: "https://maps.google.com/mapfiles/kml/shapes/schools_maps.png"
          },
          description: discount.description
        });
      }
    }

    function markerClick() {
      console.log('marker click');
      // _.map($scope.discounts, function(discount) { discount.active = false });
      // discount.active = true;
    }

    $scope.hover = function(e) {
      //debugger;
    };

});
