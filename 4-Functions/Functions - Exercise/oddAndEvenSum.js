function oddAndEvenSum(num) {
    let string = num.toString();
    let array = 1;
    let odd = 0;
    let even = 0;

    for (let i = 0; i < array.length; i++) {
        let element = Number(array[i]);

        if (element % 2 === 0) {
            even += element;
        } else if (element % 2 !== 0) {
            odd += element;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435);