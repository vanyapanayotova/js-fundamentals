function maxNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        isMax = true;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] <= arr[j]) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17]);
