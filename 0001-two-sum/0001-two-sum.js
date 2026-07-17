/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let seen = {}
    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i]
        if (need in seen) {
            return [seen[need], i]
        } else {
            seen[nums[i]] = i
        }
    }
    return null
};