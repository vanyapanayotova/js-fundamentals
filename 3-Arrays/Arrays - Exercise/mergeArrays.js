function mergeArrays(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (i % 2 === 0) {
                arr3[i] = Number(arr1[i]) + Number(arr2[i]);
            } else {
                arr3[i] = arr1[i] + arr2[i];
            }
        }
    }
    console.log(arr3.join(' - '));
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);