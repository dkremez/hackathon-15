'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
