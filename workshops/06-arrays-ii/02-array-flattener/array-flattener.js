// ### Array Flattener

// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
// ```


// YOUR CODE BELOW
function arrayFlattener(twoDArray) {
    let newArray = []
    for (i = 0; i < twoDArray.length; i++){
        let element = twoDArray[i];
        if (Array.isArray(element)) {
            for (let j = 0; j < element.length; j++){
                let nestEle = element[j]
                newArray.push(nestEle)
            }
        }
        else newArray.push(element)
    }
    return newArray
}
