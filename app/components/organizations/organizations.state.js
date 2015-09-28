;
(function () {
  'use strict';
  var state = function ($stateProvider) {
    $stateProvider
      .state('organizations', {
        url: "/organizations",
        template: '<ui-view />',
        controller: 'OrganizationsController'
      })
      .state('organizations.index', {
        url: "/index",
        templateUrl: 'organizations/index.html'
      })
      .state('organizations.new', {
        url: "/new",
        templateUrl: 'organizations/new.html'
      });
  }
  state.$inject = ['$stateProvider'];
  angular.module('testApp')
    .config(state);
})();
