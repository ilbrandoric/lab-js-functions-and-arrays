
/*

Iteration 4 | numbers2 Average
Calculating an average is a prevalent task. So let's practice it a bit.

The logic behind this:

Find the sum as we did in the first exercise (or how about reusing the function sumnumbers2()?)
Divide that sum by the number of elements in the array.

Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.

You can use the following array to test your solution:

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];



*/

// Iteration 4 | numbers2 Average

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