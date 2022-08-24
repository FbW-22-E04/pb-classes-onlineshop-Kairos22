class Product {
    constructor (name, price) {
        this.name = name
        this.price = price
    }

    toText() {
        console.log(`${this.name} ${this.price}€ in total.${(this.price * 0.16).toFixed(2)}€ VAT incl. (16%).`);
    }
       containedVAT() {
// console.log(`${(this.price * 0.16).toFixed(2)} € VAT incl.`);
return `${(this.price * 0.16).toFixed(2)} € VAT incl.`;
}
    
}

const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)
// console.log(tracksuit);

tracksuit.toText();
shoes.toText();
socks.toText();
console.log('--------------------------------');
// part 2
class Cart {
    constructor() {
        this.products = [];
    }

    addProduct(shoppedProduct){
        if (shoppedProduct instanceof Product){
            this.products.push(shoppedProduct);
            console.log(`amount of products in the cart: ${this.products.length}`);

        }else {
            console.log(`the product is not available in the shop`);
        }
    }

    getProductInfoCart(){
        this.products.forEach (item => {
            // console.log(item);
            item.toText()
        });
    }

    getTotalItemsPrice(){
       const total = this.products.reduce((acc,item) => 
         (acc += item.price),0)
       console.log(`The total amount is ${total}`);
    }
}

const cart1 = new Cart();
console.log(cart1);

cart1.addProduct(shoes);
cart1.addProduct(socks);
cart1.addProduct(tracksuit);
cart1.addProduct(123);
console.log('-------------------------');

cart1.getProductInfoCart();
console.log('------------------------');
cart1.getTotalItemsPrice();
console.log('-----------------------');
const cart = new Cart()
cart.addProduct("potato") 
console.log('-------------------------');
cart.addProduct(tracksuit)
console.log('---------------------------');
cart.addProduct(shoes)
console.log('--------------------------');
cart.addProduct(socks)
console.log('----------------------------');

