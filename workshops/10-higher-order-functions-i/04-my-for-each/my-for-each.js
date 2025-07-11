// YOUR CODE BELOW
function myForEach(arr, callback) {
    for (i = 0; i < arr.length; i++){
        let element = arr[i];
        callback(element, i)
    }
}