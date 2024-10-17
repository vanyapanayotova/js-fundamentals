function stringSubstring(word, text) {
    let lower = text.toLowerCase()
    let textArr = lower.split(' ');

    for (let text of textArr) {
        if (text === word) {
            console.log(word);
        }
        else if (!textArr.includes(word)) {
            console.log(`${word} not found!`);
            break
        }
    }
}
stringSubstring('javascript',
    'JavaScr is the best programming language javascrmipt')