(function () {
  'use strict';

  angular.module('main', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngSanitize',
    'ionic',
    'ngCordova',
    'ui.router',
    'ngMaterial',
    'pascalprecht.translate',
    'LocalForageModule'
  ])

  // Routes
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('all', {
        url: '/',
        templateUrl: 'main/templates/start.html'
      })
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'main/templates/start.html'
      })
      .state('book-form', {
        url: '/book-form',
        templateUrl: 'main/templates/book-form.html'
      });
  })

  // Translations
  .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'main/assets/translations/',
      suffix: '.json'
    });

    $translateProvider
      .useSanitizeValueStrategy('sanitize')
      .preferredLanguage('fr')
      .determinePreferredLanguage()
      .registerAvailableLanguageKeys(['fr']);
  });

  // Icons
  /*/.config(function ($mdIconProvider) {
    $mdIconProvider
      .iconSet('navigation', getSvgPath('navigation'), 24)
      .iconSet('maps', getSvgPath('maps'), 24)
      .iconSet('action', getSvgPath('action'), 24)
      .iconSet('social', getSvgPath('social'), 24)
      .iconSet('content', getSvgPath('content'), 24)
      .iconSet('av', getSvgPath('av'), 24)
      .iconSet('image', getSvgPath('image'), 24)
      .defaultIconSet(getSvgPath('action'), 24);

    function getSvgPath (set) {
      return 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-' + set + '.svg';
    }
  });/**/
})();
