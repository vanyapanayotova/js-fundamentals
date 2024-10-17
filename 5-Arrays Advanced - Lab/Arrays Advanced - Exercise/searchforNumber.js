function searchforNumber(arr, manipulations) {
    let cut = manipulations[0];
    let deleteElement = manipulations[1];
    let searchNum = manipulations[2];
    let count = 0;

    let newArr = arr.splice(deleteElement, cut - deleteElement);

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchNum) {
            count++;
        }
    }
    console.log(`Number ${searchNum} occurs ${count} times.`);
}
searchforNumber([7,5, 1, 5, 8, 2, 7, 5, 5],
    [5, 1, 5]);