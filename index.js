const erase = word => {
  let checkThisWord = word;
  // Check for any letters
  if (checkForLetters(checkThisWord)) {
   let theseIndexs = getPercentIndex(checkThisWord);
   console.log(theseIndexs);
   removePercent(checkThisWord, theseIndexs);
  } else {
    console.log("\"\"");
  }
};

const getPercentIndex = word => {
  const thisWord = word.split("");
  let percentHere = [];
  for(let i = 0; i < thisWord.length; i++){
    if(thisWord[i] === "%"){
      percentHere.push(i);
      // console.log(i)
      // if(i === 0){
      //   // console.log(newWord);
      //   newWord.splice(i, 1);
      //   // console.log("first character");
      //   // console.log(newWord);
      // } else {
      //   // console.log(i);
      //   newWord.splice((i - 1), 2);
      //   // console.log("first character");
      //   // console.log(newWord);
      // }
    }
  }
  return percentHere;
}

const checkForLetters = word => {
  let anyLetters = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== "%") {
      anyLetters = true;
    }
  }
  return anyLetters;
};
// erase("%apple");
erase("%ap%p%le");
// erase("%%%%");
