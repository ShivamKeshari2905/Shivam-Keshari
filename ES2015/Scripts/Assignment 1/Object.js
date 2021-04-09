"use strict";
console.log("Object");
var order = {
    id: 2,
    title: 'Biscuits',
    price: 50,
    orderDetails: function printOrder() {
        return "Id: " + this.id + ", Title: " + this.title + ", Price: " + this.price;
    },
    priceDetails: function getPrice() {
        return this.price;
    }
};
console.log(order.orderDetails());
console.log(order.priceDetails());
var copyOrder = Object.assign({}, order);
console.log(copyOrder);
//# sourceMappingURL=Object.js.map