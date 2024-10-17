function sumDigit(num) {
    let numTo = String(num).split('');
    let sum = 0;

    for (let i = 0; i < numTo.length; i++) {
        sum += Number(numTo[i]);
    }
    console.log(sum);
}
sumDigit(245678);