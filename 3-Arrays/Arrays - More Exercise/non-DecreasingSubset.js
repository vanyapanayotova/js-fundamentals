function nonDecreasing(arr) {

    // for (let i = 0; i < arr.length; i++) {
    //     while (arr[i] > arr[i + 1]) {
    //         arr.splice(i + 1,1);
    //     }
    // }


    console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));


    // function solve3(arr) {
    //     let max = arr[0];
    //     let result = arr.filter(el => {
    //         if (el >= max) {
    //             max = el;
    //         }
    //         return el >= max;
    //     });
    //     console.log(result.join(' '));
    // }
}
nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);