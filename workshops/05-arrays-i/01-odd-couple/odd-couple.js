// Odd Couple

// Define a function, `oddCouple`, that accepts an array of numbers as an argument.

// `oddCouple` should return a new array with the first two odd numbers from the
// original array:

// ```javascript
// oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
// ```

// If fewer than two odd numbers exist in the original array, return an empty array
// or an array with the only odd number:

// ```javascript
// oddCouple([10, 15, 20]); // => [15]
// oddCouple(2, 4, 6, 8); // => []
// ```

// YOUR CODE BELOW
function oddCouple(ary) {
  let newArray = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] % 2 !== 0) {
      newArray.push(ary[i]);
      if (newArray.length === 2) break;
    }
  }
  return newArray;
}
console.log(oddCouple([2, 4]));
