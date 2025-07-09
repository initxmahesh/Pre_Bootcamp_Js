// YOUR CODE BELOW
function onlyOdds(num) {
  if (num < 1) return 0;

  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(onlyOdds(10));
