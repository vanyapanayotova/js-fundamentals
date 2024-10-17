function rightPlace(string1, char, string2) {
    let str = string1.replace("_", char);
    if (str === string2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong');