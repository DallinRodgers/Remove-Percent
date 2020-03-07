const erase = (word) => {
  let checkThisWord = word.split("");
  // Check for any letters
  if (checkForLetters(checkThisWord)) {
    let theseIndexs = getPercentIndex(checkThisWord);
    // console.log(theseIndexs);
    removePercent(checkThisWord, theseIndexs);
  } else {
    console.log('""');
  }
};

const removePercent = (thisWord, removeHere) => {
  let newWord = thisWord;
  // console.log(thisWord);
  // console.log(removeHere);
  for (let i = thisWord.length - 1; i >= 0; i--) {
    if (removeHere.includes(i)) {
      // console.log(`found a index to remove here: ${i}`);
      if (i === 0) {
        // console.log(newWord);
        newWord.splice(i, 1);
        // console.log("first character");
        // console.log(newWord);
      } else {
        // console.log(i);
        newWord.splice(i - 1, 2);
        // console.log("first character");
        // console.log(newWord);
      }
    }
  }
  // for (let i = 0; i < newWord.length; i++) {
  //   if (removeHere.includes(i)) {
  //     // console.log(`found a index to remove here: ${i}`);
  //     if (i === 0) {
  //       // console.log(newWord);
  //       newWord.splice(i, 1);
  //       // console.log("first character");
  //       // console.log(newWord);
  //     } else {
  //       // console.log(i);
  //       newWord.splice(i - 1, 2);
  //       // console.log("first character");
  //       // console.log(newWord);
  //     }
  //   }
  // }
  newWord = newWord.join("");
  console.log(newWord);
};

const getPercentIndex = (word) => {
  let percentHere = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "%") {
      percentHere.push(i);
    }
  }
  return percentHere;
};

const checkForLetters = (word) => {
  let anyLetters = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== "%") {
      anyLetters = true;
    }
  }
  return anyLetters;
};

erase("he%%l%hel%llo");
erase("major% spar%%ks");
erase("si%%%t boy");
erase("%%%%");

// erase("he%%l%hel%llo") ➞ "hello"

// erase("major% spar%%ks") ➞ "majo spks"

// erase("si%%%t boy") ➞ "t boy"

// erase("%%%%") ➞ ""
