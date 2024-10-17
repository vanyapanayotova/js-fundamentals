function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {

        let num = String(array[i]).split('');
        let num2 = num.slice().reverse('').join('');
        num = num.join('');

        if (num === num2) {
            console.log("true");
        } else if (num !== num2) {
            console.log("false");
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);