function condenseArrayToNumber(arr) {
    let condensed = [];
    
    if (arr.length === 1) {
        console.log(arr.join());
        return;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr.length === 1) {
            console.log(arr.join());
        } else {
            condensed[i] = Number(arr[i] + arr[i + 1]);
        }
    }
    
    if (condensed.length > 1) {
        condenseArrayToNumber(condensed);
    } else {
        console.log(condensed.join());
    }
}
condenseArrayToNumber([1]);