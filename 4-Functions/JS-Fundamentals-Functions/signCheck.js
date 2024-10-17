
function signCheck(numOne, numTwo, numThree) {

    let counterNegative = 0;

    if (numOne < 0) {
        counterNegative++;
    }
    if (numTwo < 0) {
        counterNegative++;
    }
    if (numThree < 0) {
        counterNegative++;
    }
    
    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        console.log("Negative");
    }
    if (counterNegative === 1 || counterNegative === 3) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}

signCheck(5, 12, -15);