function distanceBetweenPoints(x1, y1, x2, y2) {
    let x = [x1, x2].sort((a, b) => b - a);
    let y = [y1, y2].sort((a, b) => b - a);
    let sizeA = x[0] - x[1];
    let sizeB = y[0] - y[1];

    let hypotenuse = Math.sqrt(sizeA * sizeA + sizeB * sizeB);
    console.log(hypotenuse);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);