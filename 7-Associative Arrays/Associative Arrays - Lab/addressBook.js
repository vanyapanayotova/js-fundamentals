function addressBook(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');

        addressBook[name] = address;
    }

    let addressBookEntries = Object.keys(addressBook);
    addressBookEntries.sort((a, b) => a.localeCompare(b));

    for (let key of addressBookEntries) {

        console.log(`${key} -> ${addressBook[key]}`);
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);