'use strict';

/**
 * @ngdoc service
 * @name placesApp.address
 * @description
 * # address
 * Factory in the placesApp.
 */
angular.module('placesApp')
  .factory('Address', function ($resource, ENV) {
      return $resource(ENV.apiEndpoint + '/address/:id', {}, {});
  });
