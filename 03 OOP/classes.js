// -=-=-=-=-=-=- Classes -=-=-=-=-=-=-

// OOP Pronciples: 
//  * Encapsulation
//  * Inheritance
//  * Polymorphism

// class Name { proeprties, constructor, methods, getters/setters }

class Product {
    // private fields (access only from this class)
    #quantity;

    // static fields create only once for all instances
    static count = 0;

    // initilize all required props
    constructor(name, price, quantity) {
        // create properties
        this.name = name;
        this.price = price;
        this.rating = null;
        this.#quantity = quantity;
        this.inStock = quantity > 0 ? true : false;
        // access static fields
        Product.count++;
    }

    // metbods
    show() {
        console.log(`Product: ${this.name}, ${this.price}$`);
    }
    showStatus() {
        console.log(`${this.name} is ${this.inStock ? 'in stock' : 'out of stock'}!`);
    }
    applyDiscount(value) {
        // TODO: add validation
        this.price -= this.price / 100 * value;
    }
    getTotalPrice() {
        return this.price * this.#quantity;
    }
    setPrice(value) {
        if (value >= 0) // data validation
            this.price = value;
    }
    // static method
    static getCount() {
        // does not have [this]
        return Product.count;
    }

    // ---- get / set
    get total() {
        return this.price * this.#quantity;
    }
    set quantity(value) {
        if (value >= 0) 
            this._quantity = value;
    }
}

console.log("Product count:", Product.getCount());

// ----- create class instance
let my = new Product("Asus MG50", 11000, 5); // invoke ctor

// ----- setter & getter as methods

//my.price = -12500;    // bad practice
my.setPrice(-12500);    // good practice
my.setPrice(-100);      // ignore
my.setPrice(+prompt("Enter price:"));

console.log("Total price:", my.getTotalPrice());

// ----- setter & getter as properties

//my.#quantity = -10; // private field
my.quantity = 6;
my.rating = 5;

console.log("Total price:", my.total);

my.applyDiscount(15);
my.show(); // this = prod1
my.showStatus();

let your = new Product("Radeon RX 6600", 11499, 0);
your.show();
your.showStatus();

let his = new Product("AFOX PCI-Ex", 1249, 2);
his.show();
his.showStatus();

console.log("Product count:", Product.count);

// -=-=-=-=-=-=- Interitance -=-=-=-=-=-=-
class Monitor extends Product {

    // super - reference to the base class (Product)
    constructor(name, price, quantity, resolution, diagonal, type) {
        super(name, price, quantity); // base ctor
        
        // crete new fields
        this.resolution = resolution;
        this.diagonal = diagonal;
        this.type = type;
    }

    // ! all the Product methods and fields already contains
    // override base method
    show() {
        super.show(); // base method
        console.log(`Screen: ${this.resolution}, ${this.type}`);
    }

    // add new methods
    get ppi() {
        return this.diagonal * 2.5;
    }
}

const myMonitor = new Monitor("LG", 390, 4, "1920x1080", 21.5, "IPS");

myMonitor.quantity = 10;
console.log(`PPI: ${myMonitor.ppi} pixels per inch...`);
myMonitor.show();
