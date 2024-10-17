function lastKNumbersSequence(length, sum) {
    let print = '';
    let result = [];

    for (let i = 1; i <= length; i++) {
        print += `${i} `

        result = print.split(' ').map(x => [x = [i - 1] + [i - 2]]);
    }


    console.log(result);
   
}
lastKNumbersSequence(8, 2)