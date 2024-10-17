function biggestOf3Numbers(n1, n2, n3) {
    let arr = [];
    arr.push(n1, n2, n3);
    arr.sort((a, b) => b - a);
    let firstEl = arr.slice(0, 1).join();

    console.log(firstEl);
}
biggestOf3Numbers(-2, 7, 3);