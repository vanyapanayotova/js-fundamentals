function train(array) {
    let wagons = array.shift().split(' ').map(Number);
    let maxCapasity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let [command, num] = array[i].split(' ');

        if (command === 'Add') {
            wagons.push(Number(num));
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] <= maxCapasity - Number(command)) {
                    wagons[j] = wagons[j] + Number(command);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);