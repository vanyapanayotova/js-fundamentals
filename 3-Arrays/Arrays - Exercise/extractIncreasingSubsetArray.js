function extractIncreasingSubsetFromArray(arr) {
    let newArr = [];
    let firstElement = arr.shift();

    newArr.push(firstElement);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > newArr[newArr.length-1]) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);

}
extractIncreasingSubsetFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])