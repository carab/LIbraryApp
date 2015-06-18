(function () {
  'use strict';

  angular.module('main')
    .directive('toolbar', ToolbarDirective);

  function ToolbarDirective () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      controller: ToolbarController,
      controllerAs: 'vm',
      templateUrl: 'main/templates/toolbar.html'
    };
  }

  function ToolbarController ($mdSidenav) {
    var vm = this;

    vm.openSidebar = openSidebar;

    function openSidebar () {
      $mdSidenav('sidebar').open();
    }
  }
})();

