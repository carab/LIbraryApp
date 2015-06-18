(function () {
  'use strict';

  angular.module('main')
    .factory('Book', BookService);

  function BookService ($resource, Config) {
    var endpoint = Config.env.endpoint;

    return $resource(endpoint + '/book/:id/:controller', {
      id: '@_id'
    }, {
      getEnums: {
        method: 'GET',
        params: {
          id: 'enums'
        }
      }
    });
  }
})();
