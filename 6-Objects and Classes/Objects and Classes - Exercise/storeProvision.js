function storeProvision(stock, delivery) {
    let products = [];

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let qty = Number(stock[i + 1]);

        let list = { productName, qty };
        products.push(list);
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let productName = delivery[i];
        let qty = Number(delivery[i + 1]);
        let found = products.find(m => m.productName === productName);

        if (found) {
            found.qty = Number(found.qty) + qty;
        } else {
            let list = { productName, qty };
            products.push(list);
        }
    }

    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].productName} -> ${products[i].qty}`);  
    }  
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30', 'Chips', '5']);