function houseParty(arr) {
    let guests = [];

    for (let i = 0; i < arr.length; i++) {
        let [name, is, command] = arr[i].split(' ');

        if (command === 'going!') {
            if (guests.indexOf(name) === -1) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            } 
        } else {
            let index = guests.indexOf(name);
            if (index > -1) {
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guests.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);