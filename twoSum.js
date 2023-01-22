/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let g=0; g<nums.length; g++){
            if(i == g){
                continue
            }
            if(nums[i] + nums[g] == target){
                return [i, g]
            }
        }
    }
};