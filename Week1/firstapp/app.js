(function () {
'use strict';

angular.module('myFirstApp',[])
.controller('MyFirstController',function ($scope) {
  $scope.name = "Aditya";
  //$scope.Value = 0;
  $scope.sayHello = function () {
    return "Hello Coursera";
  };

});

})();
