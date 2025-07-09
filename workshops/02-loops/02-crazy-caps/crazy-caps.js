// YOUR CODE BELOW

function crazyCaps(str) {
  debugger;
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toLowerCase();
    } else result += str[i].toUpperCase();
  }
  return result;
}
crazyCaps("Mahesh is a Tej Fellow");
