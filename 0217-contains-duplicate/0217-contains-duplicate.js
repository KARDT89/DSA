/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const prevSet = new Set()
    for(let i=0;i<nums.length;i++){
        if(prevSet.has(nums[i])){
            return true
        }else{
            prevSet.add(nums[i])
        }
    } return false
};