function countStringOccurrences(str,word) {
    
let arr = str.split(' ');
let count = 0;

for (const words of arr) {
    if (words === word) {
        count++;
    }
}
console.log(count);

}
countStringOccurrences('This is a word and it also is a sentence',
'is')