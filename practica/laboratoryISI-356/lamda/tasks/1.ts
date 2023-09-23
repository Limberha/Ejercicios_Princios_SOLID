type Product = {
    id: number;
    description: string;
    price: number;
};

let products: Product[] = [
    { id: 1, description: 'Smartphone', price: 200 },
    { id: 2, description: 'Laptop', price: 1000 },
    { id: 3, description: 'Mouse', price: 30 },
    { id: 4, description: 'Keyboard', price: 50 },
    { id: 5, description: 'Headphones', price: 45 },
];

let expensiveProducts = [];
for (let product of products) {
    if (product.price > 50) {
        expensiveProducts.push(product);
    }
}

let offerLabels = [];
for (let product of expensiveProducts) {
    offerLabels.push(`¡Oferta especial! ${product.description} por solo $${product.price}`);
}

offerLabels.sort();

console.log(offerLabels);

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


type Product_ = {
    id: number;
    description: string;
    price: number;
};

let products_: Product_[] = [
    { id: 1, description: 'Smartphone', price: 200 },
    { id: 2, description: 'Laptop', price: 1000 },
    { id: 3, description: 'Mouse', price: 30 },
    { id: 4, description: 'Keyboard', price: 50 },
    { id: 5, description: 'Headphones', price: 45 },
];

// Filtrar productos caros
let expensiveProducts_ = products_.filter(product => product.price > 50);

// Crear etiquetas de oferta
let offerLabels_ = expensiveProducts_.map(product => `¡Oferta especial! ${product.description} por solo $${product.price}`);

// Ordenar etiquetas de oferta
offerLabels.sort();

console.log(offerLabels_);
