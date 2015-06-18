(function () {
  'use strict';

  angular.module('main')
    .directive('bookList', BookListDirective);

  function BookListDirective () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      controller: BookListController,
      controllerAs: 'vm',
      templateUrl: 'main/templates/book/list.html'
    };
  }

  function BookListController (Book) {
    var vm = this;

    Book.query().$promise.then(function (books) {
      vm.books = books;
    });
  }
})();
