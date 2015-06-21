'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:DiscountsCtrl
 * @description
 * # DiscountsCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('DiscountsCtrl', function ($scope, Discount, $stateParams, filterFilter, ENV, $http) {
    $scope.discountId = $stateParams.discountId;

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
             url: 'http://localhost:3000/' + discount.category.icon.icon.url,
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
      $scope.markers = filterFilter($scope.oldMarkers, {title: discount.title})
    };

    $scope.showAll = function(){
      $scope.discountId = null;
      $scope.markers = angular.copy($scope.oldMarkers)
    };

    $scope.hoveringOver = function(value) {
      $scope.currentRating = value;
    };

    $scope.saveRating = function(discount){
      $http.post(ENV.apiEndpoint + '/rates', {discount_id: discount.id, rating: $scope.currentRating}).then(function(result){
        discount = result.data
        discount.ratingable = false;
      }, function(){

      });
    }

});
