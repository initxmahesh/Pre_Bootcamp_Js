// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  let time = 0;
  if (targetNum < currentNum) return "targetNum must be larger than currentNum";
  else {
    for (let i = currentNum; i < targetNum; i *= 2) {
      time += 20;
    }
  }
  return time;
}

