function processOddNumbers(arr) {
    let oddPosition = arr.filter((x, i) => i % 2 !== 0).reverse().map(x=> x*2).join(' ');

console.log(oddPosition);
}
processOddNumbers([10, 15, 20, 25])