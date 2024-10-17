function firstAndLastKNumbers(arr) {
    let k = arr[0];

    let array1 = arr.slice(1);
    let array2 = arr.slice(1);

    let arr1 = array1.splice(0, k);
    let arr2 = array2.splice(array2.length - k);

    console.log(arr1.join(' '));
    console.log(arr2.join(' '));

}
firstAndLastKNumbers([2, 7, 8, 9]);

