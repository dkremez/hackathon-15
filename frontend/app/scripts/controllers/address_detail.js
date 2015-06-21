'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:DiscountDetailCtrl
 * @description
 * # DiscountDetailCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('AddressDetailCtrl', function ($scope, Address, Discount, $stateParams, ENV, $http) {
      $scope.address = Address.get({id: $stateParams.id}, function(){
        $scope.discount = Discount.get({id:  $scope.address.discount_id}, function(){
            $scope.slides = [
                {
                    image: ENV.apiEndpoint + $scope.discount.category.image.image.url
                }
            ]
        })
      });

    if($stateParams.venue) {
      var url = "https://api.foursquare.com/v2/venues/" + $stateParams.venue + '?client_id=LYU51QMSEY3GA21XGC2A5QVCYHAYLMPULYUTXHDHV5EPA41G&client_secret=Q0MB01T14QM1I4CPN0RCY3THR15LZAD42JJWUYZZYGTWB50H&v=20140806'
      $http.get(url).success(function(data, status, headers, config) {
        $scope.foursquare = data.response;
        $scope.slides = $scope.foursquare.venue.photos.groups[0].items;
        console.log($scope.foursquare)
      });
    }

      $scope.saveRating = function(discount){
        $http.post(ENV.apiEndpoint + '/rates', {discount_id: discount.id, rating: $scope.currentRating}).then(function(result){
          discount = result.data
          discount.ratingable = false;
        }, function(){

        });
      };
  });
