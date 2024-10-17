function pascalCaseSplitter(text) {
    let pattern = /[A-Z][^A-Z]*/g;

    let matches = text.matchAll(pattern);
    let arr = [];
    for (const match of matches) {
        arr.push(match[0]);
    }
    console.log(arr.join(', '));
}
pascalCaseSplitter('ThisIsSoAnnoyingToDo');