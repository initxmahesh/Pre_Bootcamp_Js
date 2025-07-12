// ### Call Them All

// Write a function `callThemAll`, that, given an object and a value, calls every
// method in the object, passing in the value as the argument with each call.

// `callThemAll` should return an array with all of the returned values from each
// method invocation. The order of the elements in the returned array does not
// matter.

// ```javascript
// let addsNums = {
//   addTen: function(num) {
//     return num + 10;
//   },

//   addTwenty: function(num) {
//     return num + 20;
//   },

//   someProperty: 'value'
// };

// callThemAll(addNums, 100); // => [110, 120]
// ```


// YOUR CODE BELOW
debugger
function callThemAll(obj1, value) {
    debugger
    let newArray = []
    let keys = Object.keys(obj1)
    for (i = 0; i < keys.length; i++){
        let key = keys[i]
        if (typeof obj1[key] === 'function') {
            let result = obj1[key](value);
            newArray.push(result);
        }
    }

    return newArray;
}
