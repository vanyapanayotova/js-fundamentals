function extractFile(input) {
let nameFile = input.split('\\');
let lastElement = nameFile.pop().split('.');
let pop = lastElement.pop();


console.log(`File name: ${lastElement.join('.')}`);
console.log(`File extension: ${pop}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');