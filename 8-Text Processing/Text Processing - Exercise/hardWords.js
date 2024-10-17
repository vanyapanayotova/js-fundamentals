function hardWords(arr) {
    let searchingWords = arr.pop();

    let text = arr[0].split(' ');

    for (const word of searchingWords) {

        for (const words of text) {
            if (words === "_".repeat(word.length)) {
                let index = text.indexOf(words);
                text.splice(index, 1, word);
            }
        }
    }
    console.log(text.join(' '));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);