console.log("Object");
const order={
    id: 2,
    title : 'Biscuits',
    price: 50,

    orderDetails : function printOrder(){
        return `Id: ${this.id}, Title: ${this.title}, Price: ${this.price}`;
    },

    priceDetails: function getPrice(){
        return  this.price;
    }
};
console.log(order.orderDetails());
console.log(order.priceDetails());

const copyOrder= Object.assign({},order);
console.log(copyOrder);