// YOUR CODE BELOW
function veryOddMutant(arr) {
    let count = 0;
    let newArray = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            arr[i] = "normie"
            count += 1
        }
    }
    return count
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log("allTheNums:", allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log("countRemoved:", countRemoved);