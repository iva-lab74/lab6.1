import { DigitalProduct } from "../src/modules/DigitalProduct.js";
import { PhysicalProduct } from "../src/modules/PhysicalProduct.js";
import { calculateTax } from "../src/utils/taxCalculator.js";
import { Product } from "./modules/Product.js";

//instance
const ipad = new PhysicalProduct("IPAD Air", "IPAD", 500, 2.5);
const ebook = new DigitalProduct("ebook", "Crafting", 15, 10);

const products: Product[] = [ipad, ebook];


//loop
for ( const product of products) {
    console.log(product.displayDetails());
    console.log(`Final price with tax: $${calculateTax(product).toFixed(2)}`);
    console.log("");
}