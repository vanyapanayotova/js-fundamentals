function piccolo(array) {

    let car = {};

    for (let i = 0; i < array.length; i++) {
        let [direction, carNumber] = array[i].split(', ');
        car[carNumber] = direction;
    }

    let entries = Object.entries(car);

    let filtered = entries.filter(x => x[1] === 'IN').sort((a,b)=> a[0].localeCompare(b[0]));

    for (let [carNumber, direction] of filtered) {
        if (direction === 'IN') {
            console.log(carNumber);
        } else{
            console.log('Parking Lot is Empty');
        }
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])