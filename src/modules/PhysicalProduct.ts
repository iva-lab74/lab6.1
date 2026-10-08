import { Product } from "./Product.js";


class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku,name,price);
        this.weight = weight;
    }

    // adding 10 percent tax
    getPriceWithTax(): number {
        return this.price * .10;
    }

    //getter
    get newWeight(): string {
        return `${this.weight} kg`;
    }
}

export {PhysicalProduct}
