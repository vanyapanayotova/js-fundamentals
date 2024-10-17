function lastDigit(num) {
    let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let string = String(num);
    let array = string.split('');
    let length = array.length;
    console.log(digit[array[length - 1]]);
}
lastDigit(512);
