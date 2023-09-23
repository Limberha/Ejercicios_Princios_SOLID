type Product__ = {
    id: number;
    name: string;
    category: string;
    price: number;
};

type Order__ = {
    date: Date;
    products: Product__[];
};

let orders: Order__[] = [
    {
        date: new Date('2023-05-01'),
        products: [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
            { id: 2, name: 'Smartphone', category: 'Electronics', price: 500 }
        ]
    },
    {
        date: new Date('2023-05-10'),
        products: [
            { id: 3, name: 'Book: TypeScript Basics', category: 'Books', price: 20 },
            { id: 4, name: 'Book: Design Patterns', category: 'Books', price: 35 }
        ]
    },
    // ... más órdenes ...
];

// Código para procesar esta información:
// (Este código se vuelve bastante complejo y requiere varias estructuras y bucles para ser procesado)


///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

type Product_2 = {
    id: number;
    name: string;
    category: string;
    price: number;
};

type Order = {
    date: Date;
    products: Product_2[];
};

let orders_2: Order[] = [
    {
        date: new Date('2023-05-01'),
        products: [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
            { id: 2, name: 'Smartphone', category: 'Electronics', price: 500 }
        ]
    },
    {
        date: new Date('2023-05-10'),
        products: [
            { id: 3, name: 'Book: TypeScript Basics', category: 'Books', price: 20 },
            { id: 4, name: 'Book: Design Patterns', category: 'Books', price: 35 }
        ]
    },
    // ... más órdenes ...
];

// Calcular el total de cada orden
let orderTotals = orders.map(order => ({
    date: order.date,
    total: order.products.reduce((acc, product) => acc + product.price, 0)
}));

console.log(orderTotals);
