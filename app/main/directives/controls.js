(function () {
  'use strict';

  angular.module('main')
    .directive('controls', ControlsDirective);

  function ControlsDirective () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      controller: ControlsController,
      controllerAs: 'vm',
      templateUrl: 'main/templates/controls.html'
    };
  }

  function ControlsController ($state) {
    this.isNewButtonShown = isNewButtonShown;
    this.isOpen = false;

    function isNewButtonShown () {
      return !$state.is('book.new');
    }
  }
})();
