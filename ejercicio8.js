let word=["S","O","N","A","C","N","E","U","C"];
for(let i = 0; i < word.length / 2; i++) {
    let temp = word[i];
    word[i] = word[word.length - 1 - i];
    word[word.length - 1 - i] = temp;
}
console.log(word);