function order(product, qty) {
    switch (product) {
        case 'coffee': console.log((qty * 1.50).toFixed(2)); break;
        case 'water': console.log((qty * 1.00).toFixed(2)); break;
        case 'coke': console.log((qty * 1.40).toFixed(2)); break;
        case 'snacks': console.log((qty * 2.00).toFixed(2)); break;
    }
}
order("water", 5);
