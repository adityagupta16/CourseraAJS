(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.message = "";
    $scope.inputtext = "";
    $scope.cou = 0;

    $scope.Check = function () {
      var items = $scope.inputtext.split(",");
      var count = items.length;
      $scope.cou = count;

      if(count>0 && count<4)
      {
        $scope.message = "Enjoy!"
      }
      else {
        $scope.message = "Too Much!"
      }


    }
  }

})();
