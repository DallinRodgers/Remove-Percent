const erase = (word) => {
  let returnThis;
  // Turn string into array
  let checkThisWord = word.split("");
  // Check for any letters, if any are found it will run removePercent
  // Else it will return an empty string
  if (checkForLetters(checkThisWord)) {
    returnThis = removePercent(checkThisWord);
  } else {
    console.log('""');
    returnThis = '""';
  }
  return returnThis;
};

const removePercent = (thisWord) => {
  // Created newWord to leave thisWord unchanged
  let newWord = thisWord;
  for (let i = 0; i < thisWord.length; i++) {
    if (newWord[i] === "%") {
      // If first index is a '%' only remove that index
      if (i === 0) {
        newWord.splice(i, 1);
        // if a '%' is found, remove the index before and the '%'
      } else {
        newWord.splice(i - 1, 2);
        // Change i to repeat previous index to check for repeated '%'
        i = i - 2;
      }
    }
  }
  // Turn array into string
  newWord = newWord.join("");
  console.log(newWord);
  return newWord;
};

const checkForLetters = (word) => {
  let anyLetters = false;
  for (let i = 0; i < word.length; i++) {
    // If a letter is found checkForLetters will return true
    // Else it will return false
    if (word[i] !== "%") {
      anyLetters = true;
    }
  }
  return anyLetters;
};

const first = erase("he%%l%hel%llo");
const second = erase("major% spar%%ks");
const third = erase("si%%%t boy");
const fourth = erase("%%%%");

document.querySelector("#first").textContent = first;
document.querySelector("#second").textContent = second;
document.querySelector("#third").textContent = third;
document.querySelector("#fourth").textContent = fourth;

// erase("he%%l%hel%llo") ➞ "hello"

// erase("major% spar%%ks") ➞ "majo spks"

// erase("si%%%t boy") ➞ "t boy"

// erase("%%%%") ➞ ""
