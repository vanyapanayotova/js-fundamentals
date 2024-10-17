function addAndSubtract(num1, num2, num3) {

    function sum(n1, n2) {
        return n1 + n2;
    }

    function subtract(n1, n2) {
        return n1 - n2;
    }

    let result = subtract(sum(num1, num2), num3);
    console.log(result);
}
addAndSubtract(23,
    6,
    10
    );
