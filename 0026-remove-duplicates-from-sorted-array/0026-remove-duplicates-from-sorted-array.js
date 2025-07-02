/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = [...new Set(nums)]
    const k = unique.length
    
    for(let i = 0; i < k; i++){
        nums[i] = unique[i]
    }
    return k
};