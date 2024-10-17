function amazingNumbers(num) {
let sum = "";
let newNum = num.toString();

    for (let i = 0; i < newNum.length; i++) {
        let currentNumber = Number(newNum[i]);
        sum += currentNumber;
        console.log(sum);
    }


    console.log(`{number} Amazing? {True or False}`);
}
amazingNumbers(1233);