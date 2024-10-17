function specialNumbers(num) {
    let right = 0;
    let left = 0;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        left = i;

        if (left < 10) {
            sum = left;
        } else {
            sum = 0;
            while (left >= 10) {
                right = left % 10;
                left = Math.floor(left / 10);
                sum = sum + right + left; 
            }
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(17);




