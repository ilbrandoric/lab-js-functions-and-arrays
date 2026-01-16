// Iteration 1 | Find the Maximum


function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];



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


console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers


function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    } else if (numbers.length === 1) {
        return numbers[0];
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}



// Iteration 4 | Numbers Average

function sumNumbers2(numbers2) {
  let sum = 0;

  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }

  return sum;
}

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0;
  }

  return sumNumbers2(numbers2) / numbers2.length;
}
// Test
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2)); // 6  










// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist (words2,search) {
    if (words2.length === 0) {
        return null;
    } else {
        if (words2.indexOf(search) !== -1){
            return true;
        }else {
            return false;
        }
    }
}
console.log(doesWordExist(words2,"meatcake"));