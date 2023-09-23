class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Cart {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        let total = this.products.reduce((acc, product) => acc + product.price, 0);

        // Descuento: 10% si hay más de 5 productos
        if (this.products.length > 5) {
            total *= 0.9;
        }

        // Envío: $10 si la compra es menor a $50
        if (total < 50) {
            total += 10;
        }

        return total;
    }
}


////////////////////////////////////////
////////////////////////////////////////




class Product_ {
    constructor(public id: number, public name: string, public price: number) {}
}

class Cart_ {
    private products: Product_[] = [];

    addProduct(product: Product_) {
        this.products.push(product);
    }

    calculateTotal(): number {
        const subtotal = this.products.reduce((acc, product) => acc + product.price, 0);

        const discount = this.products.length > 5 ? 0.1 : 0;
        const discountedTotal = subtotal * (1 - discount);

        return discountedTotal < 50 ? discountedTotal + 10 : discountedTotal;
    }
}
