

// Iteration 2 | Find the Longest Word

/*

Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.
The function should return null if an empty array is passed as an argument.
You can use the following array to test your solution

function findLongestWord()
should be defined as a function
should return the longest word when called with an array of words
should return null when called with an empty array
should return the first word when called with a single-word array
should return the first occuring longest word when there are multiple words with the same length

*/


const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
//const words = ["one", "two", "three"];
//const words = [];


 function findLongestWord(words) {

  // handle empty array
  if (words.length === 0) {
    return null;
  } else if (words.length === 1) {
    return words[0];
  }

  // assume first word is the longest
  let longestWord = words[0];

  // compare with the rest
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}



/*

Version 1

function findLongestWord() {
    let longestWord = [];
    let countCharacters = [];

    for (let i = 0; i < words.length; i++) {
        countCharacters.push(words[i].length);
        longestWord = countCharacters.indexOf(Math.max(...countCharacters));
    }
    return words[longestWord];
}

*/

console.log(findLongestWord(words));
//console.log(findLongestWord([]));

