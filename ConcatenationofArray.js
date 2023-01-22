/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    ArrayNum = [];
    for(let i=0; i<nums.length; i++) {
        ArrayNum.push(nums[i]);
    }
    return nums.concat(ArrayNum)
   
};