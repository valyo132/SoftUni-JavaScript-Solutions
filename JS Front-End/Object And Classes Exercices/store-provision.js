function storeProvision(firstProdudts, secondProducts) {
    let products = {};

    for (let i = 0; i <= firstProdudts.length - 1; i++) {
        let productName = firstProdudts[i];
        let quantity = Number(firstProdudts[++i]);

        if (products.hasOwnProperty(productName)) {
            products[productName] += quantity;
        } else {
            products[productName] = quantity;
        }
    }

    for (let i = 0; i <= secondProducts.length - 1; i++) {
        let productName = secondProducts[i];
        let quantity = Number(secondProducts[++i]);

        if (products.hasOwnProperty(productName)) {
            products[productName] += quantity;
        } else {
            products[productName] = quantity;
        }
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)