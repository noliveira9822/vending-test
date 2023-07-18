"use strict";

var app = angular.module("myApp.checkout", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/checkout", {
      templateUrl: "/pages/checkout/checkout.html",
      controller: "CheckoutCtrl",
    });
  },
]);

app.controller("CheckoutCtrl", [
  "$scope",
  function (sc) {
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
  },
]);
