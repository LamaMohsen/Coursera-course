(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchItems = '';
    $scope.resultMessage = '';

    $scope.checkLunch = function () {
      var lunchItemsArray = $scope.lunchItems.split(',');
      var itemCount = lunchItemsArray.length;

      // Remove any empty items from the count
      lunchItemsArray.forEach(function (item) {
        if (item.trim() === '') {
          itemCount--;
        }
      });

      if (itemCount === 0) {
        $scope.resultMessage = 'Please enter data first';
      } else if (itemCount <= 3) {
        $scope.resultMessage = 'Enjoy!';
      } else {
        $scope.resultMessage = 'Too much!';
      }
    };
  }
})();