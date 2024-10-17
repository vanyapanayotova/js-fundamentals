function equalArrays(arr1, arr2) {
    let sumArr = 0
    let arrEqual = true;

    for (let i = 0; i < arr1.length; i++) {
        if (Number(arr1[i]) !== Number(arr2[i])) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            arrEqual = false;
            break;
        } else if (Number(arr1[i]) === Number(arr2[i])) {
            arrEqual = true;
            sumArr += Number(arr1[i]);
        }
    }

    if (arrEqual === true) {
        console.log(`Arrays are identical. Sum: ${sumArr}`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);