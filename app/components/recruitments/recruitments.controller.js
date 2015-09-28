;
(function () {
  "use strict";

  var RecruitmentsController = function ($scope) {
    $scope.recruitmentsItems = ['Recruiter 1', 'Recruiter 2'];
  };
  RecruitmentsController.$inject = ["$scope"];

  angular.module("testApp")
    .controller("RecruitmentsController", RecruitmentsController)

})();
