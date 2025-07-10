// YOUR CODE BELOW
function myReverse(array) {
    newArray = []
    for (i = array.length-1; i >= 0; i--)
        newArray.push(array[i]);
    return newArray
}