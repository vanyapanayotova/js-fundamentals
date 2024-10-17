function factorialDivision(num1, num2) {
    let res1 = 1;
    let res2 = 1;

    for (let n = 1; n <= num1; n++) {
        res1 *= n;
    }

    for (let m = 1; m <= num2; m++) {
        res2 *= m;
    }
    console.log((res1 / res2).toFixed(2));
}
factorialDivision(5,
    2)