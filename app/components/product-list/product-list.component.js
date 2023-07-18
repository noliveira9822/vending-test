angular.
  module('myApp.productList').
  component('productList', {
    template: 'product-list.template.html',
    controller: function PhoneListController() {
      this.products = [
        {
            name: "1",
            price: "12.99",
            stock: "",
      
          },
          {
            name: "2",
            price: "12.99",
            stock: "",
      
          },
          {
            name: "3",
            price: "12.99",
            stock: "",
      
          },
          {
            name: "4",
            price: "12.99",
            stock: "",
      
          },
          {
            name: "5",
            price: "12.99",
            stock: "",
      
          },
      ];
    }
  });