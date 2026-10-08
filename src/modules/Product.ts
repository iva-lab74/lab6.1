class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `${this.name} costs ${this.price} and has this SKU ${this.sku}.`;
    }


    getPriceWithTax(): number {

        return this.price;

    }

    
}

export { Product }