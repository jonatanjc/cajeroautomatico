let word=[H,O,L,A,C,O,M,O,E,S,T,A,S]
for(let i=0; i < word.length / 2; i++){
    let temp = word[i];
    word[i] = word[word,length -1 -i]
    word[word.length -1 - i] = temp;

}
console.log(word);