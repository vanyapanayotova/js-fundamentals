function wordsTracker(arr) {
    let searchWords = arr.shift().split(' ');
    let search = {};

    for (let word of searchWords) {
        search[word] = 0;
    }

    for (let word of arr) {
        if (word in search) {
            search[word]++;
        }
    }

    let entries = Object.entries(search);
    entries.sort((a,b)=> b[1] - a[1]);

    for (let [word, qty] of entries) {
        console.log(`${word} - ${qty}`);
    }

} wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because', 'this',
    'is', 'your', 'task']);