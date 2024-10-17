function schoolGrades(arr) {
    let students = {};

    for (let line of arr) {
        let studentInfo = line.split(' ');
        let sum = 0;

        // if (students[studentInfo[0]]) {
        //     sum = students[studentInfo[0]];
        // } 

        let name = '';
        let count = 0;

        for (let i = 0; i < studentInfo.length; i++) {
            if (i === 0) {
                name = studentInfo[i];
            } else {
                sum = (` ${Number(studentInfo[i])}`);
                count++;
            }
        }
        students[name] = sum / count;
    }

    let entries = Object.entries(students);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [product, qty] of entries) {
        console.log(`${product}: ${qty.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])