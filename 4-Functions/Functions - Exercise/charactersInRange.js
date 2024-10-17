function charactersInRange(char1, char2) {

    let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let stop = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let result = "";

    for (let characters = start + 1; characters < stop; characters++) {
        let element = String.fromCharCode(characters);
        result += `${element} `;
    }
    console.log(result);
}
charactersInRange('C','#');