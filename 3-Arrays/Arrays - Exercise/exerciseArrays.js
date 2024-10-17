function exerciseArrays(arr) {
    sumArr = 0;
    sumNewArr = 0;
    newArr = arr;

    // for (let i = 0; i < arr.length; i++) {
    //     sumArr += Number(arr[i]);
    // }
    for (let j = 0; j < newArr.length; j++) {
        sumArr += Number(arr[j]);
        if (Number(newArr[j]) % 2 === 0) {
            newArr[j] += j;
        } else {
            newArr[j] -= j;
        }
        sumNewArr += Number(newArr[j]);  
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);

}
exerciseArrays([-5, 11, 3, 0, 2]);