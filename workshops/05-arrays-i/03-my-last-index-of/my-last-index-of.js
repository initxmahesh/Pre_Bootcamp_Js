// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx=array.length) {
    for (let i = startIdx - 1; i >= 0; i--) {
        if (array[i] === searchValue)
            return i
    }
    return -1
}
console.log(
  myLastIndexOf(["the", "girls", "bring", "the", "boys", "out"], "the", 2)
);