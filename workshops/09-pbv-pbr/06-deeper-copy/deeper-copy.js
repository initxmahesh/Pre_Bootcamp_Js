// Your code here
function deeperCopy(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++){
    let element = arr[i];
    if (Array.isArray(element)) {
      let nestedElement = [];
      for (let j = 0; j < element.length; j++) {
        nestedElement.push(element[j]);
      }
      newArray.push(nestedElement);
    }
    else newArray.push(element);
  }
  return newArray;
}
