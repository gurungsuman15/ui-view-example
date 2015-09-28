;
(function () {
  var state = function ($stateProvider) {
    $stateProvider
      .state('recruitments', {
        url: "/recruitments",
        template: '<ui-view />',
        controller: 'RecruitmentsController'
      })
      .state('recruitments.index', {
        url: "/index",
        templateUrl: 'recruitments/index.html'
      })
      .state('recruitments.new', {
        url: "/new",
        templateUrl: 'recruitments/new.html'
      });
  }
  state.$inject = ['$stateProvider'];
  angular.module('testApp')
    .config(state);
})();

