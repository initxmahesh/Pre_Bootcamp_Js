// YOUR CODE BELOW
function isTruthy(param) {
  if (param === "")
    return "The empty string is falsey (the only falsey string)";
  else if (param === null) return "The null value is falsey";
  else if (param === false) return "The boolean value false is falsey";
  else if (param === undefined) return "undefined is falsey";
  else if (param === 0)
    return "The number 0 is falsey (the only falsey number)";
  else return true;
}
