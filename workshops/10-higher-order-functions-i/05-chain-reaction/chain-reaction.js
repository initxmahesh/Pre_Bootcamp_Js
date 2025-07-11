// YOUR CODE BELOW

function chainReaction(startVal, array) {
    let val = startVal
    for (i = 0; i < array.length; i++){
            val= array[i](val)
    }
    return val
}
