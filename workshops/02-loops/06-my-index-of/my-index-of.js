// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0) {
  for (let i = startIdx; i < source.length; i++) {
    for (let j = 0; j < searchValue.length; j++) {
      if (source[i + j] == searchValue[j]) {
        if (j == searchValue.length - 1) return i;
      } else break;
    }
  }
  return -1;
}
