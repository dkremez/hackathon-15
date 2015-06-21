'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:DiscountsCtrl
 * @description
 * # DiscountsCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('DiscountsCtrl', function ($scope, Discount, $stateParams, filterFilter, ENV, $http, $location) {

    $scope.markerClick = markerClick;

    $scope.hoverItem = function(e){
       // here will be code that highlight item on map
    };

    $scope.markers = [];
    Discount.query(function(data) {
      _.map(data, makeMarker);
      $scope.discounts = data
      $scope.oldMarkers = angular.copy($scope.markers);
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
             url: ENV.apiEndpoint + discount.category.icon.icon.url,
            //url: "https://maps.google.com/mapfiles/kml/shapes/schools_maps.png"
          },
          description: discount.description,
          address: discount.addresses[i].address
        });
      }
    }

    function markerClick() {
      console.log('marker click');
      // _.map($scope.discounts, function(discount) { discount.active = false });
      // discount.active = true;
    }

    $scope.activeSingle = function(discount) {
      $scope.discountId = discount.id;
      $scope.markers = filterFilter($scope.oldMarkers, {title: discount.title});
      discount.showAddress = true
    };

    $scope.showAll = function(){
      $scope.discountId = null;
      $scope.markers = angular.copy($scope.oldMarkers)
    };

    $scope.hoveringOver = function(value) {
      $scope.currentRating = value;
    };

    $scope.showDetail = function(address){
      $location.path("/address/"+address.id)
    };

});
