function wordOccurrences(input) {
    let words = {};

    for (let i = 0; i < input.length; i++) {
        let word = input[i];

        if (words[word]) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }
    let entries = Object.entries(words);

    entries.sort((a,b) => b[1] - a[1]);

    for (let [word, qty] of entries) {
        console.log(`${word} -> ${qty} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here",
    "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])