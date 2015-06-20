'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('LoginCtrl', function ($scope, UserService) {

    $scope.login = login;

    function login(form) {
      UserService.login({ user: form.user });
    }
  });
