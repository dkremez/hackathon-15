'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:DiscountsCtrl
 * @description
 * # DiscountsCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
    .controller('DiscountsCtrl', function ($scope, Discount, $stateParams) {
        $scope.discountId = $stateParams.discountId

        $scope.discounts = Discount.query();

        $scope.hoverItem = function(e){
           // here will be code that highlight item on map
        };

    });
