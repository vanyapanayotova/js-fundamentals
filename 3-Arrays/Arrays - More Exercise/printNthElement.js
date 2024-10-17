function printNElement(arr) {
    let n = Number(arr.pop());
    let output = '';

    for (let i = 0; i < arr.length; i = i + n) {
        if (output === '') {
            output = arr[i];
        } else {
            output = output + ' ' + arr[i];
        }
    }
    console.log(output);
}
printNElement(['dsa', 'asd', 'test', 'test', '2']);