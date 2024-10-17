function replaceRepeatingChars(input) {
    let word = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i - 1]) {
            word += input[i]
        }
    }
    console.log(word);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');