function findHighTwoNumMax(arrHolder) {
    //multi first two index
    var maxProduct = arrHolder[0]*arrHolder[1];
    
    for(var i = 2;i < arrHolder.length;i++)
        // move the index to next opperand and muliply and with the right operand check all the multple with all the lefts oppperands  and update 
        if(maxProduct < arrHolder[i-1]*arrHolder[i])
            maxProduct = arrHolder[i-1]*arrHolder[i];
    return maxProduct;
