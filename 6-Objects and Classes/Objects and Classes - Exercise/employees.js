function employees(names) {
    let employees = [];


    for (const name of names) {
        let info = { name, length: name.length };
        console.log(`Name: ${info.name} -- Personal Number: ${info.length}`);
    }

}
employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);