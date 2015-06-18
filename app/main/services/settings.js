(function () {
  'use strict';

  angular.module('main')
    .factory('Settings', SettingsService);

  function SettingsService ($localForage) {
    var settings = {
      showRead: true,
      showInProgress: true,
      showUnread: true
    };

    $localForage.getItem('settings').then(function (data) {
      angular.merge(settings, data);
    });

    settings.save = save;

    return settings;

    function save () {
      var copy = angular.copy(settings);

      delete copy.save;

      $localForage.setItem('settings', copy);
    }
  }
})();
