function sortNumbers(...numArr) {
    // let numArr = [];
    // numArr.push(num1, mun2, num3)
    numArr.sort((a, b) => b - a);

    for (let i = 0; i < 3; i++) {
        let sortNum = numArr[i];
        console.log(sortNum); 
    }   
}
sortNumbers(3, 1, -2);