function oddOccurrences(input) {
    let wordsObj = {};
    let words = input.toLowerCase().split(' ');

    for (let word of words) {
        wordsObj[word] = 0;
    }

    for (let word of words) {
        if (word in wordsObj) {
            wordsObj[word]++;
        }
    }
    let entries = Object.entries(wordsObj);

    let wordsSring = '';

    for (let [word, qty] of entries) {
        if (qty % 2 !== 0) {
            wordsSring += `${word} `;
        }
    }
    console.log(wordsSring);
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');