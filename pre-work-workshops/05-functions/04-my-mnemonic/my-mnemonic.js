// YOUR CODE BELOW
function myMnemonic(str1, str2, str3, str4) {
    if (str1 && str2 && str3 && str4) {
        return str1[0] + str2[0] + str3[0] + str4[0];
    }
    else if (str1 && str2 && str3)
        return str1[0] + str2[0] + str3[0];
    else if (str1 && str2)
        return str1[0] + str2[0];
    else
        return 'string';
}

console.log(myMnemonic("We", "Eat"));
console.log(typeof(myMnemonic("We", "Eat")));