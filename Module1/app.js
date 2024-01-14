(function() {
  'use strict';
  angular.module('eatLunch', []).controller('eatingController', handler);

  function handler($scope) {
      $scope.foodsString = "";
      $scope.foodsCount = 0;
      $scope.msg = "";
      $scope.foodsCalc = function() {
          let foodsCount = 0
          if ($scope.foodsString == "") {
              foodsCount = 0;
          }
          else {
              let foods = $scope.foodsString.split(",");
          for (let j = 0; j < foods.length; j++) {
              let foodV2 = foods[j].split(' ');
              for (let i = 0;i < foodV2.length; i++) {
                  if (foodV2[i] == ''){
                      foodV2.splice(i,1);
                      i = i-1;
                  }
              }
              if (foodV2.length == 0) {
                  foods.splice(j,1);
              }
          }
          console.log(foods);
          foodsCount = foods.length;
          }
          $scope.msg = message(foodsCount);
      };
      let message = function(count) {
          if (count > 3) {
              return "Too much!";
          }
          else if (count == 0) {
              return "Please enter data first";
          }
          else {
              return "Enjoy!";
          }
      };
  }
})()