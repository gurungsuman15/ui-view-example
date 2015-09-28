;
(function () {
  'use strict';
  var state = function ($stateProvider) {
    $stateProvider
      .state('administrations', {
        url: "/administrations",
        template: '<ui-view />',
        controller: 'AdministrationsController'
      })
      .state('administrations.index', {
        url: "/index",
        templateUrl: 'administrations/index.html'
      })
      .state('administrations.new', {
        url: "/new",
        templateUrl: 'administrations/new.html'
      })
  }
  state.$inject = ['$stateProvider'];
  angular.module('testApp')
    .config(state);
})
();
