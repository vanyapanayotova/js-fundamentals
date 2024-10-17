function smallestOfThreeNumbers(num1, num2, num3) {
    let minNum = 0;

    if (num1 < num2) {
        minNum = num1;
    } else {
        minNum = num2;
    }
    if (minNum > num3) {
        minNum = num3;
    }

    console.log(minNum);
}
smallestOfThreeNumbers(2, 3, 2);