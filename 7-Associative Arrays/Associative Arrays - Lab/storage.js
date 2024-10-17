function storage(input) {

    let products = {};

    for (let i = 0; i < input.length; i++) {
        let [product, qty] = input[i].split(' ');
        qty = Number(qty);

        if (products[product]) {
            products[product] += qty;
        } else {
            products[product] = qty;
        }
    }
    let entries = Object.entries(products);

    for (let [product, qty] of entries) {
console.log(`${product} -> ${qty}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);