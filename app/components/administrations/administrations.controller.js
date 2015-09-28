;
(function () {
  "use strict";

  var AdministrationsController = function ($scope) {
    $scope.administrationsItems = ['Administrator 1', 'Administrator 2'];
  };
  AdministrationsController.$inject = ["$scope"];

  angular.module("testApp")
    .controller("AdministrationsController", AdministrationsController)
})();
