function arrayRotation(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(' '));
}
arrayRotation([2, 4, 15, 31], 1);