// Reverse Array

// Write a function that accepts an array and reverses that array in place. The
// function should mimic the behavior of the native .reverse() array method.
// However, your reverse function should accept the array to operate on as an
// argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

// ```javascript
// let myArray = [1, 2, 3, 4];
// reverse(myArray);
// console.log(myArray) // [4, 3, 2, 1]
// ```


// YOUR CODE BELOW
function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length -1 -i] = temp
    }   
    return arr
}

let myArray = [1, 2, 3, 4];
reverseArray(myArray);
console.log(myArray) // [4, 3, 2, 1]