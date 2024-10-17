function listOfProducts(arr) {
    let list = arr.sort();

    for (let i = 0; i < list.length; i++) {
        let element =(`${i+1}.${list[i]}`);
        console.log(element);
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples']);