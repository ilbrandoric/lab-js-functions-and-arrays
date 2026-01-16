
/*

Iteration 3 | Sum Numbers
Calculating a sum can be as simple as iterating over an array and adding each of the elements together.
Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the reduce array method, making your work significantly easier. For now, let's practice the "declarative" way of adding values using loops.


function sumNumbers()
should be defined as a function
should return the sum when passed an array of numbers
should return 0 when called with an empty array
should return the first number when called with a single-element array

*/


const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

//const numbers = [];

// const numbers = [4];

//Remember to put 'parameters' inside the parentheses!

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

console.log(sumNumbers(numbers));