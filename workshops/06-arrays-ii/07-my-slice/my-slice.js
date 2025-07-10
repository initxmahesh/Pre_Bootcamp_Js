// YOUR CODE BELOW
function mySlice(originalArray, startIdx = 0, endIdx = originalArray.length) {
  let cpyArray = [];
  if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }

  if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }

  for (let i = startIdx; i < endIdx; i++) {
    let element = originalArray[i];
    cpyArray.push(element);
  }

  return cpyArray;
}