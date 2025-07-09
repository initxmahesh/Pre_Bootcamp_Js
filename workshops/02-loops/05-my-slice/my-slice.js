// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {
  let copy = "";
  for (i = startIdx; i < endIdx; i++) {
    copy += originalString[i];
  }
    return copy;
}
console.log(mySlice("Mahesh",2,5));
