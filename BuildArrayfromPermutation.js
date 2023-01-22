/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    ArrayNum = [];
    for(let i=0; i<nums.length; i++) {
        ArrayNum.push(nums[nums[i]]);

    }
    return ArrayNum;
};  