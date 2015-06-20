'use strict';

/**
 * @ngdoc service
 * @name placesApp.UserService
 * @description
 * # UserService
 * Service in the placesApp.
 */
angular.module('placesApp')
  .service('UserService', function ($http, $q) {
    var serverBaseURL = 'localhost:3000';
    var gen = function(method, url, data) {
      return $q(function(resolve, reject) {
        var q = {
          method: method,
          url: url
        };

        if (data) {
          q.data = data;
        }
        $http(q).success(function(data) {
          resolve(data);
        }).error(function(data) {
          reject(data);
        });
      });
    };

    return {
      login: function(data) {
        return gen('post', serverBaseURL + '/login', data);
      }
    }
  });
