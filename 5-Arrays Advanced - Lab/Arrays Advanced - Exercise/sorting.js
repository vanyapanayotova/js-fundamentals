function sorting(arr) {
    arr.sort((a, b) => a - b);

    let newArr = [];

    while (arr.length > 0) {
        let firstElement = arr.pop();
        newArr.push(firstElement);

        if (arr.length > 0) {

            let lastElement = arr.shift();
            newArr.push(lastElement);
        }
    }
    console.log(newArr.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);