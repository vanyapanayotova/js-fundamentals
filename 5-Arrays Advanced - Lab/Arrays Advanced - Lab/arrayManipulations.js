function arrayManipulations(array) {
    
    let arr = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(' ');

        switch (command) {
            case 'Add': arr.push(Number(firstNum)); break;
            case 'Remove': arr = arr.filter(x => x != firstNum); break;
            case 'RemoveAt':arr.splice(firstNum,1); break;
            case 'Insert':arr.splice(secondNum,0,Number(firstNum)); break;
        }
    }
    console.log(arr.join(' '));
} 
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);

// Add {number}:  добавете число в края на масива
// Remove {number}: премахва всички съвпадения на определено число от масива
// RemoveAt {index}: премахва номер при даден индекс
// Insert {number} {index}: вмъква число в даден индекс