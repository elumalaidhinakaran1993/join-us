

const longeststring =(string)=>{

    const word = string.split(' ');
    let longestWord = '';
    for (let i=0;i<word.length ;i++){
        if(word[i].length > longestWord.length){
            longestWord=word[i]
        }
    }
    return longestWord;

}

const inputString = 'The quick brown fox jumped over the lazy do';
const longestWord = longeststring(inputString);


console.log(longestWord);

const repeatString = (string,n)=>{
return string.repeat(n)
}

const repeatStrings = 'abc';
const repeatStr = repeatString(repeatStrings,3)
console.log(repeatStr);




