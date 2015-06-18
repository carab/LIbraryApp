(function () {
  'use strict';

  angular.module('main')
    .constant('Config', {
      // gulp environment: injects environment vars
      // https://github.com/mwaylabs/generator-m#gulp-environment
      env: {
        /*inject-env*/
        'endpoint': 'http://the-big-machine:8888'
        /*endinject*/
      },

      // gulp build-vars: injects build vars
      // https://github.com/mwaylabs/generator-m#gulp-build-vars
      build: {
        /*inject-build*/
        /*endinject*/
      }
    });
})();
