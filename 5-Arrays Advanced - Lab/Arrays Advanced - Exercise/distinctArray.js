function distinctArray(array) {
    
let arr = array.filter((number, index) => array.indexOf(number) === index);
console.log(arr.join(' '));
}
distinctArray([1, 2, 3, 4, 2, 4, 4]);