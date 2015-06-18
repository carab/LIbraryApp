(function () {
  'use strict';

  angular.module('main')
    .directive('bookForm', BookFormDirective);

  function BookFormDirective () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      controller: BookFormController,
      controllerAs: 'vm',
      templateUrl: 'main/templates/book/form.html'
    };
  }

  function BookFormController ($cordovaBarcodeScanner) {
    var vm = this;

    vm.book = {};

    window.document.addEventListener('deviceready', function () {
      $cordovaBarcodeScanner
        .scan()
        .then(function (barcode) {
          vm.book.isbn = barcode.text;
        }, function (error) {
          console.log(error);
        });
    }, false);
  }
})();
