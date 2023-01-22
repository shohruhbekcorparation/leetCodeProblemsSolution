/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    result = 0;
    incDec = {
        "++X" : 1,
        "X++" : 1,
        "--X" : -1,
        "X--" : -1,
    }
    operations.forEach((element) => {
        if(element in incDec) {
            result += incDec[element];
        }
    })
    return result ;
};