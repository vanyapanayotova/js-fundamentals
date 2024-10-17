function arrayOfNumbers(num, arr) {
   arr.splice(num);
    let reverse = arr.reverse().join(' ');

    console.log(reverse);
}
arrayOfNumbers(3, [10, 20, 30, 40, 50]);