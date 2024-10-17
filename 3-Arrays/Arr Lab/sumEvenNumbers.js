function sumEvenNumbers(arr) {
    // let numArr = arr.map(Number);
    numArr = arr.filter(x => Number(x) % 2 == 0);
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += Number(numArr[i]);
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);