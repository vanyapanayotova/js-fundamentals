function evenOddSubtraction(arr) {
    let evan = arr.filter(x => x % 2 === 0);
    let odd = arr.filter(x => x % 2 !== 0);
    let sumEvan = 0;
    let sumOdd = 0;

    for (let i = 0; i < evan.length; i++) {
        sumEvan += Number(evan[i]);
    }

    for (let j = 0; j < odd.length; j++) {
        sumOdd += Number(odd[j]);
    }

    let result = sumEvan - sumOdd;

    console.log(result);
}
evenOddSubtraction([1, 2, 3, 4, 5, 6]);