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
        $scope.discounts = Discount.query()
    });
