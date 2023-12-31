// -=-=-=-=-=-=- objects -=-=-=-=-=-=-

let number = 20;
let client = "Vlad Tymo";
let quantity = 4;
//...

// -------- create an object
// 1 - using new
var order = new Object();

// 2 - using {}
var order = {
    // initi with properties
    number: 10,
    discount: 15,
    price: 1200
};

console.log("Order type:", typeof order);

// -- add new properties
order.date = "20/1/2023";
order.client = "John Smith";
order.products = [ "Apple", "Cherry", "Banana", "Pineapple" ];
order.address = {
    city: "Rivne", 
    street: "Soborna", 
    builing: "5a"
};

let hardArr = [10, "Bob", ["Apple", "gaer"], { stree: "agrae"}];

hardArr[3];

// -- override values
order.price += 30;

// -- read object properties
// 1 - object.property
// 2 - object["property"]

console.log(`Order info: ${order["number"]} at ${order["date"]}`);
console.log(`[${order.number}] ${order.client} ordered ${order.products.length} items!`);
console.log(`Client address: ${order.address.city}, ${order.address.street}...`);

order.speed = 100;
// -- delete existin prop
delete order.speed;

console.log("Value:", order.speed);

// -- using object as a parameters
function addNewItem(order, product) {
    order.products.push(product);
}
function showOrder(order) {
    console.log("Order:", order.number);
    console.log("Products:", order.products);

    console.log("this in function:", this);
}

addNewItem(order, "Lemon");
showOrder(order);

// -- create object array
const coord = { x: 4, y: 9, z: 12 };

const coords = [ 
    { x: 1, y: 4 }, 
    { x: 4, y: 0 }, 
    { x: 0, y: 8} 
];

console.log("X2:", coords[1].x); // 4

// -- get all object keys
console.warn("Order properties:");

for (const key in order) {
   console.log(key + ": " + order[key]);
}

// ------------ methods
const product = {
    name: 'Radeon RX 6600',
    price: 11499,
    rating: 4.8,
    inStock: true,

    // object methods
    applyDiscount: function (value) {
        // this - reference to this object
        this.price -= this.price / 100 * value;

        // [this] is [product]
        console.log("this in method:", this);
    },
    showPrice() {
        console.log(`Price: ${this.price}$`);
    }
};

console.log("this in global scope:", this);

product.showPrice();
product.applyDiscount(15);
product.showPrice();
