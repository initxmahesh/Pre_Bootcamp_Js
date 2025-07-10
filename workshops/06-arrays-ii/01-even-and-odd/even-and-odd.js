// YOUR CODE BELOW
function evenAndOdd(array) {
  let newArray = [[], []];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] % 2 === 0) {
        newArray[0].push(array[i]);
      } else {
        newArray[1].push(array[i]);
      }
    }
  }
  return newArray;
}
