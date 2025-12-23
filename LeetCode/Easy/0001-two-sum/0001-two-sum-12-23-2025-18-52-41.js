/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let required = target - nums[i]
        if (required in hash) {
            return [i, hash[required]]
        } else {
            hash[nums[i]] = i
        }
    }
};