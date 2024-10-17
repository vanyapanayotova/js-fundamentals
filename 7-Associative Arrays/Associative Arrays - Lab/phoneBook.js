function phoneBook(arr) {

    let phoneBookObj = {};

    for (let line of arr) {
        let [name, number] = line.split(' ');

        phoneBookObj[name] = number;
    }

    for (const name in phoneBookObj) {
        console.log(`${name} -> ${phoneBookObj[name]}`);  
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])