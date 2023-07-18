'use strict';

var app = angular.module("myApp.vending", ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vending', {
    templateUrl: '/pages/vending/vending.html',
    controller: 'VendingCtrl'
  });
}])

/* had to change this because otherwise i was getting the error: "scope is undefined" */ 
app.controller("VendingCtrl", ['$scope', function(sc) {
  sc.carts=[]; //create a variable name carts, this will be the storage of the product that the buyer choose
  sc.products = [
    {
      name: "1",
      price: "12.99",
      stock: "3"
    },
    {
      name: "2",
      price: "12.99",
      stock: "3"
    },
    {
      name: "3",
      price: "12.99",
      stock: "3"
    },
    {
      name: "4",
      price: "12.99",
      stock: "3"
    },
    {
      name: "5",
      price: "12.99",
      stock: "3"
    },
    {
      name: "6",
      price: "12.99",
      stock: "3"
    }
  ]; // array of products to be used to show on UI.


  sc.total = 0; //display the default value of total

  sc.setTotals = function(cart){ //set a function name setTotals 
    if(cart){ //check if cart is already set in the function
      sc.total += cart.price; //sum the total value of each product
    }
  }

  sc.remove_cart = function(cart){ //set a function called remove_cart
    if(cart){ //checked if the cart has a value
      sc.carts.splice(sc.carts.indexOf(cart), 1); //delete a product based on the index 
      sc.total -= cart.price; //deduct the price of the product  simultaneously when deleted
    }
  }
  
}]);