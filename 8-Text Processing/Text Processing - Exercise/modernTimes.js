function modernTimes(input) {
    let arr = input.split(' ');

    for (let i = 0; i < arr.length; i++) {

        let pattern = /[#]{1}[A-Za-z]+/;

        if (pattern.test(arr[i])) {
            let word = arr[i].split('')
            let shift = word.shift();
            console.log(word.join(''));
        }
    }
}

modernTimes('The symbol is known #variously in English-speaking #regions as the #number sign');
