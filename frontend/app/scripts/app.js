'use strict';

/**
 * @ngdoc overview
 * @name placesApp
 * @description
 * # placesApp
 *
 * Main module of the application.
 */
angular
  .module('placesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider, localStorageServiceProvider) {

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|map|geo|maps|tel):/);
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('discounts', {
        url: '/discounts',
        templateUrl: 'views/discounts.html',
        controller: 'DiscountsCtrl'
      });

    $urlRouterProvider.otherwise('/login');

    localStorageServiceProvider
      .setPrefix('placesApp')
      .setStorageType('sessionStorage');

    $httpProvider.interceptors.push(function ($q, $rootScope, localStorageService) {
      return {
        request: function (config) {
          if (localStorageService.get('access_token')) {
            try {
              var t = localStorageService.access_token;
              config.headers.Authorization = t;
            } catch (err) {localStorageService.clearAll(); console.warn('local storage err in config');}
          }
          return config;
        },

        response: function (result) {
          return result;
        },

        responseError: function (rejection) {
          if (rejection.status === 401) {
            console.log('Failed with', rejection.status, 'status');
            $rootScope.$broadcast('request:rejected');
          }
          return $q.reject(rejection);
        }
      };
    });
  })
  .constant('ENV', {
    'apiEndpoint': 'http://localhost:3000'
  });

