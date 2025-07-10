// My Unshift

// Write a function `unShift` that takes an array and a value of any type as arguments.

// `unShift` should return a new array, with the given value as the first element
// in the new array.

// ```javascript
// unShift([1, 2, 3], 0); / => [0, 1, 2, 3];
// ```

// Do not use the built-in .shift method for this problem!


// YOUR CODE BELOW
function myUnshift(array, arg) {
    newArray = [arg]
    newArray = newArray.concat(array)
    return newArray
}

// function myUnshift(array, arg) {
//     let newArray = [arg]
//     for (let i = 0; i < array.length; i++){
//         newArray[newArray.length]= array[i]
//     }
//     return newArray
// }

console.log(myUnshift(['bears', 'cows', 'ducks'], 'antelopes'))