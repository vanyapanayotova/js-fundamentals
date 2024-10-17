function smallestTwoNumbers(arr) {
    let print = arr.sort((a, b) => a - b).slice(0, 2).join(' ');

    console.log(print);
}
smallestTwoNumbers([30, 15, 50, 5]);