let word=[H,O,L,A];
let i=0;
let array=word[i];
word[i]=word[word.length-1];
word[word.length-1]=array;

console.log(word);