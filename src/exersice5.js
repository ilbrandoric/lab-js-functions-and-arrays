
/*

Iteration 5 | Find Element
Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. 
Return true if the word exists in the array; otherwise, return false.

The function should return null if an empty array is passed as an argument.


function doesWordExist()
should be defined as a function
should return null when called with an empty array
should return false if the word we are looking for is not in the array
should return true if the word we are looking for is in the array


*/

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist (words2,search) {
    if (words2.length === 0) {
        return null;
    } else {
        if (words2.indexOf(search) !== -1){ // indexOf returns -1 if the element is NOT found
            return true;
        }else {
            return false;
        }
    }
}


console.log(doesWordExist(words2,"trouble"));


