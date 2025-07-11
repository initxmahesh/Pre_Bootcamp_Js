// YOUR CODE BELOW
function deeperCopy(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (Array.isArray(element)) {
            let nestedElement = []
            for (let j = 0; j < element.length; j++){
                nestedElement.push(element[j])
            }
            newArray.push(nestedElement)
        }
        else newArray.push(element)


    }            
    return newArray
    
}

let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]]