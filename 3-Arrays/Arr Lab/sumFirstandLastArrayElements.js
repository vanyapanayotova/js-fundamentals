function sumEndElements(numbers) {
    let firstElement = numbers[0];
    let lastElement = numbers[numbers.length - 1];

    let sum = firstElement + lastElement;

    console.log(sum);
}
sumFirstAndLAst([20, 30, 40])