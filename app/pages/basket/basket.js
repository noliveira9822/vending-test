"use strict";

var app = angular.module("myApp.basket", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/basket", {
      templateUrl: "/pages/basket/basket.html",
      controller: "BasketCtrl",
    });
  },
]);

app.controller("BasketCtrl", [
  "$scope",
  function (sc) {
    sc.discount = 0.5;

    sc.cart = [
      {
        name: "1",
        price: "12.99",
        stock: "3",
      },
      {
        name: "2",
        price: "12.99",
        stock: "3",
      },
    ];

    sc.total = function () {
      var total = 0;
      angular.forEach(sc.cart, function (item) {
        total += item.price;
      });

      return total - sc.discount;
    };
  },
]);
