(function () {
  'use strict';

  angular.module('main')
    .directive('sidebar', SidebarDirective);

  function SidebarDirective () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      controller: SidebarController,
      controllerAs: 'vm',
      templateUrl: 'main/templates/sidebar.html'
    };
  }

  function SidebarController ($state, $mdSidenav, Settings) {
    var vm = this;

    vm.settings = Settings;
    vm.saveSettings = Settings.save;

    vm.is = $state.is;
    vm.go = go;

    function go (state) {
      $mdSidenav('sidebar').close();
      $state.go(state);
    }
  }
})();
