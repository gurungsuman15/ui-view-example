;
(function () {
  "use strict";

  var DashboardController = function ($scope, ROLES) {
      $scope.views = [];

      function View(name, label, index) {
        this.name = name;
        this.label = label;
        this.index = index;
      }

      var getView = function (role) {
        if (role === ROLES.recruiter) {
          return [
            new View('recruitments', 'Recruitments', 2)
          ];
        }
        if (role === ROLES.organizor) {
          return [
            new View('organizations', 'Organizations', 1),
          ];
        }
        if (role === ROLES.administrator) {
          return [
            new View('organizations', 'Organizations', 1),
            new View('recruitments', 'Recruitments', 2),
            new View('administrations', 'Administrations', 3)
          ];
        }
      };

      var addView = function (views) {
        angular.forEach(views, function (view) {
          if (!objectPropInArray($scope.views, 'name', view.name))
            $scope.views.push(view);
        });

      };

      function objectPropInArray(list, prop, val) {
        if (list.length > 0 ) {
          for (var i in list) {
            if (list[i][prop] === val) {
              return true;
            }
          }
        }
        return false;
      }

      var addViewForRole = function (role) {
        addView(getView(role));
      };


      var currentUserRoles = ['ADMINISTRATOR']

      angular.forEach(currentUserRoles, function (role) {
        addViewForRole(role);
      });

  };
  DashboardController.$inject = ["$scope", "ROLES"];

  angular.module("testApp")
    .controller("DashboardController", DashboardController)

})();
