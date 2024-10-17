function rotateArray(array) {
    let rotation = Number(array.pop());

    for (let i = 0; i < rotation; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}



rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

