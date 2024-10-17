function sumOfOdd(num) {
    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i = i + 2) {
        counter++;
        if (counter <= num) {
            sum += i;
        } else {
            break
        }
        console.log(i);   
    }
    console.log(`Sum: ${sum}`);
}
sumOfOdd(5);