function censoredWords(str, word) { 
    let element = "*".repeat(word.length);
    console.log(str.replace(word,element));
}
censoredWords('Find the hidden word', 'hidden');