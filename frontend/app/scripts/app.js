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
    'LocalStorageModule',
    'uiGmapgoogle-maps',
    'angularUtils.directives.dirDisqus',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider, localStorageServiceProvider,
                   $locationProvider) {
    $locationProvider.hashPrefix('!')
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
      })
      .state('discount', {
        url: '/discounts/:discountId',
        templateUrl: 'views/discounts.html',
        controller: 'DiscountsCtrl'
      });

    $urlRouterProvider.otherwise('/login');

    localStorageServiceProvider
      .setPrefix('placesApp')
      .setStorageType('localStorage');

    $httpProvider.interceptors.push(function ($q, $rootScope, localStorageService) {
      return {
        request: function (config) {
          if (localStorageService.get('access_token')) {
            try {
              var t = localStorageService.get('access_token');
              config.headers.Authorization = t;
            } catch (err) {localStorageService.clearAll(); console.warn('local storage err in config');}
          }
          return config;
        }
      };
    });
  })
  .constant('ENV', {
    'apiEndpoint': 'http://localhost:3000'
  });

