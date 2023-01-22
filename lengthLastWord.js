/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    arrayWords = s.trim().split(' ').splice(-1);
    if(s == " ") {
        return 0;
    }else return arrayWords[0].length;
};