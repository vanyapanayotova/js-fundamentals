function magicSum(arr, num) {
    let magicNum = "";

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === num) {
                magicNum = `${arr[i]} ${arr[j]}`;
                console.log(magicNum);
                magicNum = "";
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6],
    6);