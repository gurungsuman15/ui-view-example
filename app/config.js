angular.module('testApp')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
  });

