// YOUR CODE BELOW

function mostVowels(strg) {
  const vowel = "AEIOUaeiou";
  let strgArr = strg.split(" ");
  let max = 0;
  let mostVwl = "";
  for (let i = 0; i < strgArr.length; i++) {
    let word = strgArr[i].replace(/[^a-zA-Z]/g, "");
    let count = 0;
    for (let j = 0; j <= word.length; j++) {
      let letter = word[j];
      if (vowel.includes(letter)) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      mostVwl = word;
    }
  }
  return max === 0 ? "" : mostVwl;
}
