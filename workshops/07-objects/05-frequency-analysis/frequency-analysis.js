// ### Frequency Analysis

// Define a function `frequencyAnalysis` that accepts a string of lower-case
// letters.

// `frequencyAnalysis` should return an object containing the count for each letter
// in the string.

// ```javascript
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
// ```


// YOUR CODE BELOW

function frequencyAnalysis(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let ele = str[i];
    if (obj[ele] === undefined) {
      let count = 0;
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) count++;
      }
      obj[ele] = count;
    }
  }
  return obj;
}
