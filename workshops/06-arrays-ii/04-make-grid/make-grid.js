// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
    let newArray = [];
    for (i = 0; i < numRows; i++) {
        let tempArray = []
        for (j = 0; j < numColumns; j++) {
            tempArray.push(j+1)
        }
        newArray.push(tempArray);
    }
    return newArray;
}


console.log(makeGrid(3, 4));