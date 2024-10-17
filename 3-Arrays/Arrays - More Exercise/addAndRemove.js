function addAndRemove(arr) {
    let output = [];
    let counter = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'add') {
            counter = counter + 1;
            output.push(counter);
        } else if (arr[i] === 'remove') {
            counter = counter + 1;
            output.pop();
        }
    }
    if (output.length === 0) {
        console.log('Empty');
    } else {
        console.log(output.join(' '));
    }
}
addAndRemove(['remove']);