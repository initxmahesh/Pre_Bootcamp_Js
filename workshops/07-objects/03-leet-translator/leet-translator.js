let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
// function leetTranslator(str) {
//     let newString = ''
//     for (let element of str.toLowerCase().split("")){
//         if (letters.includes(element)) {
//             let index = letters.indexOf(element);
//             newString += leetChars[index]
//         }
//         else newString += element;
//     }
//     return newString
// }


function leetTranslator(str) {
    let newString = '';
    let tempString = str.toLowerCase("")
    let obj = {}
    for (i = 0; i < letters.length; i++) {
        obj[letters[i]]=leetChars[i]
    }
    for (j = 0; j < tempString.length; j++){
        newString += obj[tempString[j]] 
    }
    return newString
}