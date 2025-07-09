// Only One

// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.

// ```javascript
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
// ```


// YOUR CODE BELOW

function onlyOne(arg1, arg2, arg3) {
    let check = 0;
    let args = [arg1, arg2, arg3]
    for (let i = 0; i < 3; i++){
        if (args[i]){
            check++
        }
    }
    if (check < 2 && check > 0)
    return true
    else return false
}