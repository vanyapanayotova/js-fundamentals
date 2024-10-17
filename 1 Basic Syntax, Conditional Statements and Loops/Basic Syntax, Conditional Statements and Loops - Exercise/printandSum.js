function printandSum(firstNum, lastNum) {
    let sum = 0;
    let print = "";

    for (let i = firstNum; i <= lastNum; i++) {
        print += (`${i} `);
        sum += i;
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}
printandSum(50, 60);