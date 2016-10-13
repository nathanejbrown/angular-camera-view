(function() {

  'use strict';

  const app = angular.module('cameraApp');

  app.controller('productCtrl', function ($rootScope) {
    $rootScope.products = [];
    $rootScope.subtotal = 0;
    $rootScope.tax = 0;
    $rootScope.total = 0;

    this.checkForDupes = function(array, newItem) {
      let returnNotBoolean = -1;
      array.forEach(function(item, index) {
        if (item.name === newItem.name) {
          returnNotBoolean = index;
        }
      })
      return returnNotBoolean;
    }

    this.addProduct = function(product) {
      let newObject = ({
        id: product.id,
        name: product.name,
        image: product.image,
        rating: product.rating,
        price: product.price,
        onSale: product.onSale,
        quantity: 1
      });
      let dupesValue = this.checkForDupes($rootScope.products, newObject);
      if (dupesValue === -1) {
        $rootScope.products.push(newObject);
      } else {
        $rootScope.products[dupesValue].quantity++;
      }

      var tempTax = (product.price * .0816);
      $rootScope.tax += (tempTax);
      $rootScope.subtotal += product.price;
      $rootScope.total = ($rootScope.tax + $rootScope.subtotal);
    };
  })

  app.controller('deleteController', function ($rootScope) {
    this.deleteProduct = function (name) {
      $rootScope.products.forEach((item, index) => {
        if (item.name === name) {
          $rootScope.products.splice(index, 1);
        }
      });
    };
  });

}());
