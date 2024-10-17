function companyUsers(arr) {
    let companyObj = {};

    for (const line of arr) {
        let [company, id] = line.split(' -> ');

        if (company in companyObj) {
            companyObj[company][id] = 0;
        } else {
            companyObj[company] = {[id]: 0};
        }
    }

    let entries = Object.entries(companyObj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let companyName of entries) {
        console.log(companyName[0]);
    
        for (let employeeId in companyName[1]) {
            console.log(`-- ${employeeId}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);