'use strict';

/**
 * @ngdoc service
 * @name placesApp.Discount
 * @description
 * # Discount
 * Factory in the placesApp.
 */
angular.module('placesApp')
  .factory('Discount', function($resource, ENV){
      return $resource(ENV.apiEndpoint + '/discounts/:id', {}, {});
  });
