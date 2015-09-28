;
(function () {
  'use strict';
  var state = function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: "/dashboard",
        views: {
          '': {
            templateUrl: 'components/dashboard/index.html',
            controller: 'DashboardController'
          },
          'organizations@dashboard': {
            templateUrl: 'components/organizations/index.html',
            controller: 'OrganizationsController'
          },
          'recruitments@dashboard': {
            templateUrl: 'components/recruitments/index.html',
            controller: 'RecruitmentsController'
          },
          'administrations@dashboard': {
            templateUrl: 'components/administrations/index.html',
            controller: 'AdministrationsController'
          }
        }
      });
  }
  state.$inject = ['$stateProvider'];
  angular.module('testApp')
    .config(state);
})
();
