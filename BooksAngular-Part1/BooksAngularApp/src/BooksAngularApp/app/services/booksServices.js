(function () {
    'use strict';

    var booksServices = angular.module('booksServices', ['ngResource']);

    booksServices.factory('Books', ['$resource',
      function ($resource) {
          return $resource('/api/books/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);


})();