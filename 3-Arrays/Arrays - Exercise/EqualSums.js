function equalSums(arr) {
    let foundIndex = 'no';

    for (let i = 0; i < arr.length; i++) {
        let rigthSum = 0;
        let leftSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += arr[l];
        }
        for (let r = i + 1; r < arr.length; r++) {
            rigthSum += arr[r];
        }

        if (leftSum === rigthSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);