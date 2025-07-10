// YOUR CODE BELOW
function myIncludes(ary, searchValue) {
    for (i = 0; i < ary.length; i++){
        if (ary[i] === searchValue)
            return true;
    }
    return false;
}