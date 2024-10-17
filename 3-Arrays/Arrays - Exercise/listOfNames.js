function listOfNames(arr) {
    arr.sort((a,b) => a.localeCompare(b));
    console.log(arr.join('\n'));
}
listOfNames(["John", "Bob", "Christina", "Ema"]);