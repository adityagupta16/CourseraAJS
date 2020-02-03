(function () {
  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Aditya";
    $scope.stateOfBeing = "sad";

    $scope.sayMessage = function () {
      return "Aditya plays cricket well";
    };

    $scope.Makehappy = function () {
      $scope.stateOfBeing = "happy";
    };
  }

})();
