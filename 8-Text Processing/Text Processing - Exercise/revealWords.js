function revealWords(word, str) {
    let arr = str.split(' ');
    let searchingWords = word.split(', ');

    for (const word of searchingWords) {

        for (const words of arr) {
            if (words === "*".repeat(word.length)) {
                let index = arr.indexOf(words);
                arr.splice(index, 1, word);
            }
        }
    }
    console.log(arr.join(' '));
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');
