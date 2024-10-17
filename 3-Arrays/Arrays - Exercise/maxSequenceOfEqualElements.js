function equalElements(arr) {
    let counter = 1;
    let maxCount = 1;
    let index = 0;
    let currentString = String(arr[0]);
    let print = "";

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            counter++;
            currentString += ' ' + arr[i];
        } else {
            counter = 1;
            currentString = String(arr[i]);
        }

        if (counter > maxCount) {
            maxCount = counter;
            index = i;
            print = currentString;
        }
    }
    console.log(print);
    // console.log(maxCount, index);
}
equalElements([2, 1, 1, 2, 3, 3,3, 3, 2, 2, 2, 1]);