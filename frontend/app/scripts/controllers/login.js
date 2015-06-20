'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('LoginCtrl', function ($scope, UserService, localStorageService,
                                     $timeout, $state) {

    $scope.alerts = [];
    $scope.login = login;
    $scope.closeAlert = closeAlert;

    function login(form) {
      if(!form.user || !form.user.username || !form.user.password) {
        var alert = { type: 'danger', msg: 'Заполните все поля' };
        $scope.alerts.push(alert);
        // $timeout(function() { alert.expired = true; }, 2000);
        return;
      }
      UserService.login({ user: form.user })
        .then(function(data) {
          localStorageService.set('access_token', data.access_token);
          // $state.go('/main');
        })
        .catch(function(data) {
          var alert = { type: 'danger', msg: data.error };
          // $timeout(function() { alert.expired = true; }, 2000);
          $scope.alerts.push(alert);
        });
    }

    function closeAlert(index) {
      $scope.alerts.splice(index, 1);
    }
  });
