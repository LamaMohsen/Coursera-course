(function() {
    angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuyCtrl = this;
      toBuyCtrl.shoppingList = ShoppingListCheckOffService.getToBuyItems();

      toBuyCtrl.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtCtrl = this;
      boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
      var service = this;

      // Initial shopping list
      var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "apples", quantity: 5 },
        { name: "milk", quantity: 2 },
        { name: "bread", quantity: 1 },
        { name: "eggs", quantity: 12 }
      ];

      var boughtItems = [];

      service.getToBuyItems = function() {
        return toBuyItems;
      };

      service.getBoughtItems = function() {
        return boughtItems;
      };

      service.buyItem = function(itemIndex) {
        var item = toBuyItems[itemIndex];
        boughtItems.push(item);
        toBuyItems.splice(itemIndex, 1);
      };
    }
  })();