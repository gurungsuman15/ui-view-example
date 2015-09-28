;
(function () {
  "use strict";

  var OrganizationsController = function ($scope) {
      $scope.organizationsItems = ['Organizer 1', 'Organizer 2'];
    $scope.editClicked = function(){
      console.log(123);
    }
  }
  OrganizationsController.$inject = ["$scope"];

  angular.module("testApp")
    .controller("OrganizationsController", OrganizationsController)

})();
