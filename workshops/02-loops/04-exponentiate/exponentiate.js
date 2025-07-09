// YOUR CODE BELOW
function exponentiate(base, power) {
  result = base;
  if (power === 0) return 1;
  else {
    for (i = power; i > 1; i--) {
      result *= base;
    }
  }
  return result;
}
