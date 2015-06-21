'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:DiscountDetailCtrl
 * @description
 * # DiscountDetailCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('AddressDetailCtrl', function ($scope, Address, Discount, $stateParams, ENV) {
      $scope.address = Address.get({id: $stateParams.id}, function(){
        $scope.discount = Discount.get({id:  $scope.address.discount_id}, function(){
            $scope.slides = [
                {
                    image: ENV.apiEndpoint + $scope.discount.category.image.image.url
                }
            ]
        })
      });

      $scope.saveRating = function(discount){
        $http.post(ENV.apiEndpoint + '/rates', {discount_id: discount.id, rating: $scope.currentRating}).then(function(result){
          discount = result.data
          discount.ratingable = false;
        }, function(){

        });
      };
  });
